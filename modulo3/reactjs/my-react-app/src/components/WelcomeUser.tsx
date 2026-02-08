interface WelcomeUserProps {
  name?: string;
}

export default function WelcomeUser({ name = "Francisco" }: WelcomeUserProps) {
  return <p>Bienvenido, {name}</p>;
}