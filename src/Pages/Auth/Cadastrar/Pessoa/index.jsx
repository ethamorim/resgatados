import { Link } from 'react-router-dom';
import { useState } from 'react';

import PrimeiraEtapa from 'Layouts/PrimeiraEtapa';
import FormCadastroSelect from 'Layouts/FormCadastroSelect';
import BotaoLink from 'Components/Botao/BotaoLink';

function Pessoa() {
  const opcoes = [
    {
      label: 'Pessoa física',
      value: 'F'
    },
    {
      label: 'ONG',
      value: 'O'
    }
  ];
  const [ pessoa, setPessoa ] = useState(opcoes[0].value);

  const proximoForm = (pessoa === 'F')
    ? '/cadastrar/pessoa/fisica'
    : '/cadastrar/pessoa/juridica'

  return (
    <PrimeiraEtapa>
      <main>
        <FormCadastroSelect>
          <label htmlFor="pessoa">Você é...</label>
          <select
            id="pessoa"
            name="pessoa"
            value='F'
            onChange={(ev) => setPessoa(ev.target.value)}>
            {opcoes.map(el => (
              <option value={el.value} key={el.value}>{el.label}</option>
            ))}
          </select>

          <BotaoLink to={proximoForm} theme="light">Próximo</BotaoLink>
        </FormCadastroSelect>
      </main>
    </PrimeiraEtapa>
  );
}

export default Pessoa;
