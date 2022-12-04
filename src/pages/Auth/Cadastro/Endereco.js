import { Link } from 'react-router-dom';
import SegundaEtapa from './SegundaEtapa';

function Endereco() {
  return (
    <SegundaEtapa titulo="Endereço">
      <main className='center mrg-2'>
        <form className='form-rsg'>
          <label htmlFor="cep">cep:</label>
          <input id="cep" />

          <label htmlFor="endereco">endereco:</label>
          <input id="endereco" />

          <label htmlFor="complemento">complemento:</label>
          <input id="complemento" />

          <label htmlFor="numero">número:</label>
          <input id="numero" />

          <label htmlFor="cidade">cidade:</label>
          <input id="cidade" />

          <label htmlFor="estado">estado:</label>
          <input id="estado" />

          <Link to='/' className='cadastrar'>Cadastrar</Link>
        </form>
      </main>
    </SegundaEtapa>
  );
}

export default Endereco;
