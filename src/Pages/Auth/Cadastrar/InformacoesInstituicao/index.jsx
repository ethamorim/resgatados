import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SegundaEtapa from 'Layouts/SegundaEtapa';
import FormCadastro from 'Layouts/FormCadastro';
import BotaoAcao from 'Components/Botao/BotaoAcao';

import { setInformacoes } from 'Features/Cadastro/cadastroSlice';

function InformacoesInstituicao() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ cnpj, setCnpj ] = useState('');
  const [ nome, setNome ] = useState('');
  const [ user, setUser ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ telefone, setTelefone ] = useState('');
  const [ senha, setSenha ] = useState('');

  return (
    <SegundaEtapa titulo="Informações da instituição">
      <FormCadastro>
          <label htmlFor="cnpj">cnpj:</label>
          <input
            id="cnpj"
            value={cnpj}
            onChange={(ev) => setCnpj(ev.target.value)}
          />

          <label htmlFor="user">nome de usuário:</label>
          <input
            id="user"
            value={user}
            onChange={(ev) => setUser(ev.target.value)}
          />

          <label htmlFor="instituicao">nome da instituição:</label>
          <input
            id="instituicao"
            value={nome}
            onChange={(ev) => setNome(ev.target.value)}
          />

          <label htmlFor="email">email:</label>
          <input
            id="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />

          <label htmlFor="telefone">telefone:</label>
          <input
            id="telefone"
            value={telefone}
            onChange={(ev) => setTelefone(ev.target.value)}
          />

          <label htmlFor="senha">senha:</label>
          <input
            id="senha"
            value={senha}
            onChange={(ev) => setSenha(ev.target.value)}
          />

          <BotaoAcao
            theme='light'
            onClick={() => {
              dispatch(setInformacoes({
                cpfCnpj: cnpj,
                user,
                nome,
                email,
                telefone,
                senha
              }));
              navigate('/cadastrar/endereco');
            }}>Próximo</BotaoAcao>
      </FormCadastro>
    </SegundaEtapa>
  );
}

export default InformacoesInstituicao;
