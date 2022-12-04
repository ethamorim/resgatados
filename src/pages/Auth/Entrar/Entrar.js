import React from "react";

import AuthScreen from "../AuthScreen";
import Botao from '../../../components/Botao';

import PataTitulo from '../../../components/PataTitulo'

class Entrar extends React.Component {
  render() {
    return (
      <AuthScreen className="entrar">
        <PataTitulo>Entre na sua conta</PataTitulo>

        <main>
          <form className="form-rsg">
            <label htmlFor="email">email:</label>
            <input id="email" />

            <label htmlFor="senha">senha:</label>
            <input id="senha" />

            <Botao titulo="Entrar" className="entrar" />
          </form>
        </main>
      </AuthScreen>
    );
  }
}

export default Entrar;
