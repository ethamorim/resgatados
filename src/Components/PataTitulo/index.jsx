import React from "react";

import Pata from 'Assets/Images/pata.svg';

import sheet from './style.module.scss';

function PataTitulo(props) {
  return (
    <header className={sheet.headerPataTitulo}>
      <img src={Pata} alt="" className={sheet.bgPataTitulo} />

      <div className={sheet.tituloConteiner}>
        <h1>{props.children}</h1>
      </div>
    </header>
  );
}

export default PataTitulo;
