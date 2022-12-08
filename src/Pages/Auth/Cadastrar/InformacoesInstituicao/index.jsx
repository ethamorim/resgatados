import { Link } from 'react-router-dom';
import SegundaEtapa from 'Layouts/SegundaEtapa';

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

          <Link to='/cadastrar/endereco' className='proximo'>Próximo</Link>
        </form>
      </main>
    </SegundaEtapa>
  );
}

export default InformacoesInstituicao;
