import SegundaEtapa from './SegundaEtapa';
import Botao from '../../../components/Botao';

function InformacoesInstituicao() {
  return (
    <SegundaEtapa titulo="Informações da instituição">
      <main className='center mrg-2'>
        <form className='form-rsg'>
          <label htmlFor="instituicao">nome da instituição:</label>
          <input id="instituicao" />

          <label htmlFor="cnpj">cnpj:</label>
          <input id="cnpj" />

          <label htmlFor="email">email:</label>
          <input id="email" />

          <label htmlFor="telefone">telefone:</label>
          <input id="telefone" />

          <Botao titulo="Próximo" className="proximo" />
        </form>
      </main>
    </SegundaEtapa>
  );
}

export default InformacoesInstituicao;
