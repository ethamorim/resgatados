import React from "react";

import Pata from 'Assets/Images/pata.svg';

import './style.scss';

function PataTitulo(props) {
  return (
    <header className="pttl-header">
      <img src={Pata} alt="" className="pata-bg-titulo" />

      <div className="titulo-conteiner">
        <h1>{props.children}</h1>
      </div>
    </header>
  );
}

export default PataTitulo;
