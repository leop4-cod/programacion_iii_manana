export class RegistroDietetico {
	private idGeneric: string = 'REG-2024-';
	private numeroRegistro: string;
	private fecha!: string;

	constructor(numeroRegistro: string) {
		this.numeroRegistro = numeroRegistro;
		this.generarFecha();
	}

	private generarFecha(): void {
		this.fecha = new Date().toDateString();
	}

	getFecha(): string {
		return this.fecha;
	}

	getAtributes(): { numeroRegistro: string; fecha: string; id: string } {
		return {
			numeroRegistro: this.numeroRegistro,
			fecha: this.fecha,
			id: this.idGeneric
		};
	}

	getNumeroRegistro(): string {
		return this.numeroRegistro;
	}
}
