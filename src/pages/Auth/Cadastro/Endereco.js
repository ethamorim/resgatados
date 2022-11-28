import SegundaEtapa from './SegundaEtapa';
import Botao from '../../../components/Botao';

function Endereco() {
  return (
    <SegundaEtapa titulo="Endereço">
      <main className='center mrg-2'>
        <form className='form-rsg'>
          <label for="cep">cep:</label>
          <input id="cep" />

          <label for="endereco">endereco:</label>
          <input id="endereco" />

          <label for="complemento">complemento:</label>
          <input id="complemento" />

          <label for="numero">número:</label>
          <input id="numero" />

          <label for="cidade">cidade:</label>
          <input id="cidade" />

          <label for="estado">estado:</label>
          <input id="estado" />

          <Botao titulo="Cadastrar" className="cadastrar" />
        </form>
      </main>
    </SegundaEtapa>
  );
}

export default Endereco;
