import SegundaEtapa from './SegundaEtapa';
import Botao from '../../../components/Botao';

function InformacoesInstituicao() {
  return (
    <SegundaEtapa titulo="Informações da instituição">
      <main className='center mrg-2'>
        <form className='form-rsg'>
          <label for="instituicao">nome da instituição:</label>
          <input id="instituicao" />

          <label for="cnpj">cnpj:</label>
          <input id="cnpj" />

          <label for="email">email:</label>
          <input id="email" />

          <label for="telefone">telefone:</label>
          <input id="telefone" />

          <Botao titulo="Próximo" className="proximo" />
        </form>
      </main>
    </SegundaEtapa>
  );
}

export default InformacoesInstituicao;
