import SegundaEtapa from 'Layouts/SegundaEtapa';
import BotaoLink from 'Components/Botao/BotaoLink';
import FormCadastro from 'Layouts/FormCadastro';

function Endereco() {
  return (
    <SegundaEtapa titulo="Endereço">
      <FormCadastro>
          <label htmlFor="cep">cep:</label>
          <input id="cep" />

          <label htmlFor="endereco">endereco:</label>
          <input id="endereco" />

          <label htmlFor="complemento">complemento:</label>
          <input id="complemento" />

          <label htmlFor="numero">número:</label>
          <input id="numero" />

          <label htmlFor="cidade">cidade:</label>
          <input id="cidade" />

          <label htmlFor="estado">estado:</label>
          <input id="estado" />

          <BotaoLink to="/" theme="dark">Cadastrar</BotaoLink>
      </FormCadastro>
    </SegundaEtapa>
  );
}

export default Endereco;
