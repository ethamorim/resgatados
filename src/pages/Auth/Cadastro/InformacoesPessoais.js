import { Link } from 'react-router-dom';
import SegundaEtapa from './SegundaEtapa';

function InformacoesPessoais() {
  return (
    <SegundaEtapa titulo="Informações pessoais">
      <main className='center mrg-2'>
        <form className='form-rsg'>
          <label htmlFor="instituicao">nome completo:</label>
          <input id="instituicao" />

          <label htmlFor="cnpj">cpf:</label>
          <input id="cnpj" />

          <label htmlFor="email">email:</label>
          <input id="email" />

          <label htmlFor="telefone">telefone:</label>
          <input id="telefone" />

          <label htmlFor="nascimento">data de nascimento:</label>
          <input id="nascimento" />

          <Link to='/cadastrar/endereco' className='proximo'>Próximo</Link>
        </form>
      </main>
    </SegundaEtapa>
  );
}

export default InformacoesPessoais;
