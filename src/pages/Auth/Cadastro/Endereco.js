import SegundaEtapa from './SegundaEtapa';
import Botao from '../../../components/Botao';

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

          <Botao titulo="Cadastrar" className="cadastrar" />
        </form>
      </main>
    </SegundaEtapa>
  );
}

export default Endereco;
