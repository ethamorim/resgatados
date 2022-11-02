import LogoResgatados from '../assets/images/logo.svg';

function TelaInicial() {
  return (
    <div className="tela-inicial">
      <div>
        <img
          src={LogoResgatados}
          alt=""
          className="logo"
        />
      </div>
    </div>
  );
}

export default TelaInicial;
