import SegundaEtapa from 'Layouts/SegundaEtapa';
import FormCadastro from 'Layouts/FormCadastro';
import BotaoLink from 'Components/Botao/BotaoLink';

function InformacoesInstituicao() {
  return (
    <SegundaEtapa titulo="Informações da instituição">
      <FormCadastro>
          <label htmlFor="instituicao">nome da instituição:</label>
          <input id="instituicao" />

          <label htmlFor="cnpj">cnpj:</label>
          <input id="cnpj" />

          <label htmlFor="email">email:</label>
          <input id="email" />

          <label htmlFor="telefone">telefone:</label>
          <input id="telefone" />

          <BotaoLink to='/cadastrar/endereco' theme='light'>Próximo</BotaoLink>
      </FormCadastro>
    </SegundaEtapa>
  );
}

export default InformacoesInstituicao;
