import React from "react";

import Pata from '../assets/images/pata.svg';

function PataTitulo(props) {
  return (
    <header className="pttl-header">
      <img src={Pata} alt="" className="pata-bg-titulo bg" />

      <div className="titulo-conteiner">
        <h1>{props.children}</h1>
      </div>
    </header>
  );
}

export default PataTitulo;
