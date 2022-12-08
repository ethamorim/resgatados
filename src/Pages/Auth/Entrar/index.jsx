import React from "react";

import Auth from "Layouts/Auth";
import PataTitulo from 'Components/PataTitulo';
import BotaoLink from "Components/BotaoLink";
import FormCadastro from "Layouts/FormCadastro";

class Entrar extends React.Component {
  render() {
    return (
      <Auth>
        <PataTitulo>Entre na sua conta</PataTitulo>

        <FormCadastro>
          <label htmlFor="email">email:</label>
          <input id="email" />

          <label htmlFor="senha">senha:</label>
          <input id="senha" />

          <BotaoLink to="/home" theme="dark">Entrar</BotaoLink>
        </FormCadastro>
      </Auth>
    );
  }
}

export default Entrar;
