import React, { useState } from "react";
import { Link } from "react-router-dom";

import PrimeiraEtapa from "Layouts/PrimeiraEtapa";
import FormCadastro from "Layouts/FormCadastro";
import BotaoLink from "Components/BotaoLink";

function Objetivo() {
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
        <FormCadastro>
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

          <BotaoLink to={proximoForm} theme="light">Próximo</BotaoLink>
        </FormCadastro>
    </PrimeiraEtapa>
  );
}

export default Objetivo;
