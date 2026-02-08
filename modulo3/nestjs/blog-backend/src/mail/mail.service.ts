import * as nodemailer from 'nodemailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SendMailDto } from './dto/send-mail.dto';
import axios from 'axios';
import { Resend } from 'resend';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
    private resend: Resend;
    private resendSender: string;

    constructor(private configService: ConfigService) {
        const apiKey = this.configService.get<string>('RESEND_API_KEY');
        if (!apiKey) {
            throw new Error('RESEND_API_KEY no está configurada en las variables de entorno');
        }
        this.resend = new Resend(apiKey);
        this.resendSender = this.configService.get<string>('RESEND_SENDER') || '';
    }

    async sendMail(dto: SendMailDto) {
        const mailUser = this.configService.get<string>('MAIL_USER');
        const mailPass = this.configService.get<string>('MAIL_PASS');
        
        // Log the values for debugging (remove in production)
        console.log('MAIL_USER:', mailUser);
        console.log('MAIL_PASS length:', mailPass ? mailPass.length : 'undefined');
        
        if (!mailUser || !mailPass) {
            throw new InternalServerErrorException('MAIL_USER o MAIL_PASS no están configurados en las variables de entorno');
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: mailUser,
                pass: mailPass,
            },
        });

        try {
            const info = await transporter.sendMail({
                from: mailUser,
                to: dto.to,
                subject: dto.subject,
                html: dto.message,
            });
            return { messageId: info.messageId };
        } catch (error) {
            console.error('Error al enviar correo con Gmail:', error);
            // Handle specific Gmail authentication errors
            if (error.code === 'EAUTH' && error.responseCode === 535) {
                throw new InternalServerErrorException('Credenciales de Gmail inválidas. Por favor verifica tu MAIL_USER y MAIL_PASS en el archivo .env. Si tienes 2FA activado, debes usar una contraseña de aplicación.');
            }
            throw new InternalServerErrorException('No se pudo enviar el correo');
        }
    }

    async fetchUserListFromPublicApi() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        return res.data;
    }

    async sendWithSendGrid(dto: SendMailDto) {
        const sendGridApiKey = this.configService.get<string>('SENDGRID_API_KEY');
        const sendGridSender = this.configService.get<string>('SENDGRID_SENDER');
        
        if (!sendGridApiKey || !sendGridSender) {
            throw new InternalServerErrorException('SENDGRID_API_KEY o SENDGRID_SENDER no están configurados en las variables de entorno');
        }

        try {
            const res = await axios.post(
                'https://api.sendgrid.com/v3/mail/send',
                {
                    personalizations: [{ to: [{ email: dto.to }] }],
                    from: { email: sendGridSender },
                    subject: dto.subject,
                    content: [{ type: 'text/html', value: dto.message }],
                },
                {
                    headers: {
                        Authorization: `Bearer ${sendGridApiKey}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            return { status: res.status };
        } catch (error) {
            throw new InternalServerErrorException('No se pudo enviar el correo con SendGrid');
        }
    }

    async sendWithResend(dto: SendMailDto) {
        if (!this.resendSender) {
            throw new InternalServerErrorException('RESEND_SENDER no está configurado en las variables de entorno');
        }

        try {
            const { data, error } = await this.resend.emails.send({
                from: this.resendSender,
                to: [dto.to],
                subject: dto.subject,
                html: `<p>${dto.message}</p>`,
            });

            if (error) {
                console.error('Error de Resend:', error);
                // Handle the specific case where we're sending to a non-verified email
                if (error.statusCode === 403 && error.message.includes('testing emails')) {
                    throw new InternalServerErrorException('Con la cuenta gratuita de Resend, solo puedes enviar correos a tu propia dirección verificada: ' + this.resendSender);
                }
                throw new InternalServerErrorException('No se pudo enviar el correo con Resend: ' + error.message);
            }

            return { id: data.id };
        } catch (error) {
            console.error('Error al enviar correo con Resend:', error);
            if (error instanceof InternalServerErrorException) {
                throw error; // Re-throw our custom error
            }
            throw new InternalServerErrorException('No se pudo enviar el correo con Resend');
        }
    }
}