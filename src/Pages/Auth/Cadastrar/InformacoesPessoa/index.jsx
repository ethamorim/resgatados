import SegundaEtapa from 'Layouts/SegundaEtapa';
import BotaoLink from 'Components/BotaoLink';

function InformacoesPessoa() {
  return (
    <SegundaEtapa titulo="Informações pessoais">
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

        <BotaoLink to='/cadastrar/endereco' theme="light">Próximo</BotaoLink>
      </form>
    </SegundaEtapa>
  );
}

export default InformacoesPessoa;
