import React from "react";

import { Link } from "react-router-dom";

import LogoResgatados from '../assets/images/logo.svg'
import TituloResgatados from '../assets/images/titulo_resgatados.svg';
import DivisorResgatados from '../assets/images/divisor.svg';
import PetsIniciar from '../assets/images/pets_iniciar.svg';
import PataOutline from '../assets/images/pata_outline.svg';


function TelaInicial() {
  return (
    <main className="screen tela-inicial">
      <section className="logo-conteiner">
        <img className="logo" src={LogoResgatados} alt="" />
        <img className="titulo" src={TituloResgatados} alt="" />
        <img className="divisor" src={DivisorResgatados} alt="" />
        <p className="slogan">Juntando você e sua alma gêmea de até quatro patas!</p>
      </section>

      <section className="acao-conteiner">
        <Link to="/entrar" className="btn entrar">Entrar</Link>
        <Link to="/cadastrar" className="btn cadastrar">Cadastrar</Link>

        <Link to="recuperar-senha" className="esqueceu-senha">Esqueceu a senha?</Link>
      </section>

      <section className="pets-iniciar">
        <img src={PetsIniciar} alt="" />
      </section>

      <article className="tela-inicial__background">
        <img className="pata_1 bg" src={PataOutline} alt="" />
        <img className="pata_2 bg" src={PataOutline} alt="" />
        <img className="pata_3 bg" src={PataOutline} alt="" />
        <img className="pata_4 bg" src={PataOutline} alt="" />
      </article>
    </main>
  );
}

export default TelaInicial;
