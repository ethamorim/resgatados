export function setUsuarioAtivo(usuario) {
  sessionStorage.setItem('usuario', JSON.stringify(usuario));
}

export function getUsuarioAtivo() {
  return JSON.parse(sessionStorage.getItem('usuario'));
}

