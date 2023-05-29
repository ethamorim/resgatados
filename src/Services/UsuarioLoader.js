export function setUsuarioAtivo(usuario) {
  if (usuario === null)
    sessionStorage.removeItem('usuario')
  else
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
}

export function getUsuarioAtivo() {
  return JSON.parse(sessionStorage.getItem('usuario'));
}

