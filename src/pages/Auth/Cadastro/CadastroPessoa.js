import PrimeiraEtapa from './PrimeiraEtapa';
import Botao from '../../../components/Botao';

function CadastroPessoa() {
  return (
    <PrimeiraEtapa>
      <main>
        <form className='form-rsg-cdst'>
          <label htmlFor="pessoa">Você é...</label>
          <select id="pessoa" name="pessoa">
            <option value="F">Pessoa física</option>
            <option value="O">ONG</option>
          </select>

          <Botao titulo="Próximo" className="proximo" />
        </form>
      </main>
    </PrimeiraEtapa>
  );
}

export default CadastroPessoa;
