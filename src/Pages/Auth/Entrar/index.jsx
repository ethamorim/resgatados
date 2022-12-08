import React from "react";

import Auth from "Layouts/Auth";
import PataTitulo from 'Components/PataTitulo';
import BotaoLink from "Components/BotaoLink";

import './style.scss';

class Entrar extends React.Component {
  render() {
    return (
      <Auth className="entrar">
        <PataTitulo>Entre na sua conta</PataTitulo>

        <main>
          <form className="form-rsg">
            <label htmlFor="email">email:</label>
            <input id="email" />

            <label htmlFor="senha">senha:</label>
            <input id="senha" />

            <BotaoLink to="/home" theme="dark">Entrar</BotaoLink>
          </form>
        </main>
      </Auth>
    );
  }
}

export default Entrar;
