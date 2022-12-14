import usuarios from 'Assets/Data/usuarios.json';

export default function getUsuarios(user) {
  return usuarios.find(el => el.user === user);
}
