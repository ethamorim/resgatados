import React from "react";

import Pata from '../assets/images/pata.svg';

function PataTitulo(props) {
  return (
    <header>
      <img src={Pata} alt="" className="pata-bg-titulo bg" />

      <div class="titulo-conteiner">
        <h1>{props.children}</h1>
      </div>
    </header>
  );
}

export default PataTitulo;
