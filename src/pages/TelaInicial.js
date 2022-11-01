import React from "react";

import LogoResgatados from '../assets/images/logo.svg'
import TituloResgatados from '../assets/images/titulo-resgatados.svg';
import DivisorResgatados from '../assets/images/divisor.svg';


function TelaInicial() {

  return (
    <main>
      <div className="logo-conteiner">
        <img className="logo" src={LogoResgatados} alt="" />
        <img className="titulo" src={TituloResgatados} alt="" />
        <img className="divisor" src={DivisorResgatados} alt="" />
      </div>
    </main>
  );
}

export default TelaInicial;
