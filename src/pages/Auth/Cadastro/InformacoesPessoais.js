import SegundaEtapa from './SegundaEtapa';
import Botao from '../../../components/Botao';

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

          <Botao titulo="Próximo" className="proximo" />
        </form>
      </main>
    </SegundaEtapa>
  );
}

export default InformacoesPessoais;
