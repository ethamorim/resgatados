import React, { useState } from "react";
import { Link } from "react-router-dom";

import PrimeiraEtapa from "./PrimeiraEtapa";

function CadastroObjetivo() {
  const opcoes = [
    {
      label: 'Adotar',
      value: 'A'
    },
    {
      label: 'Divulgar',
      value: 'D'
    }
  ];
  const [ objetivo, setObjetivo ] = useState(opcoes[0].value);

  const proximoForm = (objetivo === 'A')
    ? '/cadastrar/pessoa/fisica'
    : '/cadastrar/pessoa';

  return (
    <PrimeiraEtapa>
      <main>
        <form className="form-rsg-cdst">
          <label htmlFor="objetivo">Qual seu objetivo?</label>
          <select
            id="objetivo"
            name="objetivo"
            value={objetivo}
            onChange={(ev) => setObjetivo(ev.target.value)}>
            {opcoes.map(el => (
              <option value={el.value} key={el.value} >{el.label}</option>
            ))}
          </select>

          <Link to={proximoForm} className="proximo">Próximo</Link>
        </form>
      </main>
    </PrimeiraEtapa>
  );
}

export default CadastroObjetivo;
