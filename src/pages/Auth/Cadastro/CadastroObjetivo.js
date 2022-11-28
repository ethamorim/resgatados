import React from "react";

import PataTitulo from '../../../components/PataTitulo';
import Botao from "../../../components/Botao";
import PataVoltar from '../../../components/PataVoltar';

function CadastroObjetivo() {
  return (
    <div className="screen cadastro">
      <PataTitulo>Faça seu cadastro</PataTitulo>

      <main>
        <form className="form-rsg-cdst">
          <label for="objetivo">Qual seu objetivo?</label>
          <select id="objetivo" name="objetivo">
            <option value="A">Adotar</option>
            <option value="D">Divulgar</option>
          </select>

          <Botao titulo="Próximo" className="proximo" />
        </form>
      </main>

      <footer>
        <PataVoltar />
      </footer>
    </div>
  );
}

export default CadastroObjetivo;
