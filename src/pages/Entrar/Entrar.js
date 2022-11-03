import React from "react";

import Pata from '../../assets/images/pata.svg';
import PataOutline from '../../assets/images/pata_outline.svg'
import Botao from '../../components/Botao';

class Entrar extends React.Component {

  render() {
    return (
      <div className="screen entrar">
        <header>
          <img src={Pata} alt="" className="pata-bg-titulo bg" />

          <div class="titulo-conteiner">
            <h1>Entra na sua conta</h1>
          </div>
        </header>

        <main>
          <form className="form-rsg">
            <label for="email">email:</label>
            <input id="email" />

            <label for="senha">senha:</label>
            <input id="senha" />

            <Botao titulo="Entrar" className="entrar" />
          </form>
        </main>

        <footer>
          <img src={require('../../assets/images/pata_escura.png')} alt="" />
          <span>Voltar</span>
        </footer>

        <article className="auth-footer-bg">
            <img src={PataOutline} alt="" className="pata-outline bg" />
            <img src={Pata} alt="" className="pata bg" />
        </article>
      </div>
    );
  }
}

export default Entrar;
