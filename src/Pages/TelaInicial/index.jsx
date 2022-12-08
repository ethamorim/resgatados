import React from "react";
import { Link } from "react-router-dom";

import Screen from "Layouts/Screen";
import BotaoLink from "Components/BotaoLink";

import LogoResgatados from 'Assets/Images/logo.svg'
import TituloResgatados from 'Assets/Images/titulo_resgatados.svg';
import DivisorResgatados from 'Assets/Images/divisor.svg';
import PetsIniciar from 'Assets/Images/pets_iniciar.svg';
import PataOutline from 'Assets/Images/pata_outline.svg';

import './style.scss';

function TelaInicial() {
  return (
    <Screen className="tela-inicial">
      <section className="logo-conteiner">
        <img className="logo" src={LogoResgatados} alt="" />
        <img className="titulo" src={TituloResgatados} alt="" />
        <img className="divisor" src={DivisorResgatados} alt="" />
        <p className="slogan">Juntando você e sua alma gêmea de até quatro patas!</p>
      </section>

      <section className="acao-conteiner">
        <BotaoLink to="/entrar" theme="light">Entrar</BotaoLink>
        <BotaoLink to="/cadastrar" theme="dark">Cadastrar</BotaoLink>

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
    </Screen>
  );
}

export default TelaInicial;
