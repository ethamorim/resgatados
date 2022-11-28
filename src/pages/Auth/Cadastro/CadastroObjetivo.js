import React from "react";

import PrimeiraEtapa from "./PrimeiraEtapa";
import Botao from "../../../components/Botao";

function CadastroObjetivo() {
  return (
    <PrimeiraEtapa>
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
    </PrimeiraEtapa>
  );
}

export default CadastroObjetivo;
