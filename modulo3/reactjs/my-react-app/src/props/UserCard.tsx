export default function UserCard({ user }: any) {
  return <div>{user.name} {user.apellido} - {user.age} años - {user.direccion} - {user.telefono}</div>;
}
