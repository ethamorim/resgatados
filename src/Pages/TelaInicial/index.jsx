import React from "react";
import { Link } from "react-router-dom";

import Screen from "Layouts/Screen";
import BotaoLink from "Components/BotaoLink";

import LogoResgatados from 'Assets/Images/logo.svg'
import TituloResgatados from 'Assets/Images/titulo_resgatados.svg';
import DivisorResgatados from 'Assets/Images/divisor.svg';
import PetsIniciar from 'Assets/Images/pets_iniciar.svg';
import PataOutline from 'Assets/Images/pata_outline.svg';

import sheet from './style.module.scss';

function TelaInicial() {
  return (
    <Screen className={sheet.telaInicial}>
      <section className={sheet.logoConteiner}>
        <img className={sheet.logo} src={LogoResgatados} alt="" />
        <img className={sheet.titulo} src={TituloResgatados} alt="" />
        <img className={sheet.divisor} src={DivisorResgatados} alt="" />
        <p className={sheet.slogan}>Juntando você e sua alma gêmea de até quatro patas!</p>
      </section>

      <section className={sheet.acaoConteiner}>
        <BotaoLink to="/entrar" theme="light">Entrar</BotaoLink>
        <BotaoLink to="/cadastrar" theme="dark">Cadastrar</BotaoLink>

        <Link to="/recuperar-senha" className={sheet.esqueceuSenha}>Esqueceu a senha?</Link>
      </section>

      <section className={sheet.petsIniciar}>
        <img src={PetsIniciar} alt="" />
      </section>

      <article className={sheet.telaInicial__background}>
        <img className={sheet.pata_1} src={PataOutline} alt="" />
        <img className={sheet.pata_2} src={PataOutline} alt="" />
        <img className={sheet.pata_3} src={PataOutline} alt="" />
        <img className={sheet.pata_4} src={PataOutline} alt="" />
      </article>
    </Screen>
  );
}

export default TelaInicial;
