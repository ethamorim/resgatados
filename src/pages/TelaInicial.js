import React from "react";

import Botao from "../components/Botao";

import LogoResgatados from '../assets/images/logo.svg'
import TituloResgatados from '../assets/images/titulo_resgatados.svg';
import DivisorResgatados from '../assets/images/divisor.svg';
import PetsIniciar from '../assets/images/pets_iniciar.svg';
import PataOutline from '../assets/images/pata_outline.svg';


function TelaInicial() {

  return (
    <main className="tela-inicial">
      <section className="logo-conteiner">
        <img className="logo" src={LogoResgatados} alt="" />
        <img className="titulo" src={TituloResgatados} alt="" />
        <img className="divisor" src={DivisorResgatados} alt="" />
        <p className="slogan">Juntando você e sua alma gêmea de até quatro patas!</p>
      </section>

      <section className="acao-conteiner">
        <Botao className="entrar" titulo="Entrar" />
        <Botao className="cadastrar" titulo="Cadastrar" />

        <a className="esqueceu-senha" href="/">Esqueceu a senha?</a>
      </section>

      <section className="pets-iniciar">
        <img src={PetsIniciar} alt="" />
      </section>

      <article className="tela-inicial__background">
        <img className="pata_1" src={PataOutline} alt="" />
        <img className="pata_2" src={PataOutline} alt="" />
        <img className="pata_3" src={PataOutline} alt="" />
        <img className="pata_4" src={PataOutline} alt="" />
      </article>
    </main>
  );
}

export default TelaInicial;
