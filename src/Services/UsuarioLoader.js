import usuarios from '../Assets/Data/usuarios.json';

let usuarioAtivo = null;

export function getUsuarios(user) {
  if (user)
    return usuarios.find(el => el.user === user);
  else
    return usuarios;
}

export function setUsuarioAtivo(usuario) {
  usuarioAtivo = usuario;
}

export function getUsuarioAtivo() {
  return usuarioAtivo;
}

