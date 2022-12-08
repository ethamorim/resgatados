import { Link } from 'react-router-dom';
import { useState } from 'react';

import PrimeiraEtapa from 'Layouts/PrimeiraEtapa';

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
        <form className='form-rsg-cdst'>
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

          <Link to={proximoForm} className="proximo">Próximo</Link>
        </form>
      </main>
    </PrimeiraEtapa>
  );
}

export default Pessoa;
