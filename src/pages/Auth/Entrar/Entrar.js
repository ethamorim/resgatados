import React from "react";

import AuthScreen from "../AuthScreen";

import PataTitulo from '../../../components/PataTitulo'
import { Link } from "react-router-dom";

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

            <Link to='/home' className="entrar">Entrar</Link>
          </form>
        </main>
      </AuthScreen>
    );
  }
}

export default Entrar;
