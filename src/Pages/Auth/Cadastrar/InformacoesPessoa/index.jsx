import SegundaEtapa from 'Layouts/SegundaEtapa';
import BotaoLink from 'Components/BotaoLink';
import FormCadastro from 'Layouts/FormCadastro';

function InformacoesPessoa() {
  return (
    <SegundaEtapa titulo="Informações pessoais">
      <FormCadastro>
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
      </FormCadastro>
    </SegundaEtapa>
  );
}

export default InformacoesPessoa;
