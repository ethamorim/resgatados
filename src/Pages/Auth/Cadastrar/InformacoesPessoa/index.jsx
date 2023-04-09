import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SegundaEtapa from 'Layouts/SegundaEtapa';
import BotaoAcao from 'Components/Botao/BotaoAcao';
import FormCadastro from 'Layouts/FormCadastro';

import { setInformacoes } from 'Features/Cadastro/cadastroSlice';

function InformacoesPessoa() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ cpf, setCpf ] = useState('');
  const [ user, setUser ] = useState('');
  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ telefone, setTelefone ] = useState('');
  const [ dataNascimento, setDataNascimento ] = useState('');
  const [ senha, setSenha ] = useState('');


  return (
    <SegundaEtapa titulo="Informações pessoais">
      <FormCadastro>
        <label htmlFor="cnpj">cpf:</label>
        <input
          id="cnpj"
          value={cpf}
          onChange={(ev) => setCpf(ev.target.value)}
        />

        <label htmlFor="user">nome de usuário:</label>
        <input
          id="user"
          value={user}
          onChange={(ev) => setUser(ev.target.value)}
        />

        <label htmlFor="instituicao">nome completo:</label>
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

        <label htmlFor="nascimento">data de nascimento:</label>
        <input
          id="nascimento"
          type='date'
          value={dataNascimento}
          onChange={(ev) => setDataNascimento(ev.target.value)}
        />

        <label htmlFor="senha">senha:</label>
        <input
          id="senha"
          value={senha}
          onChange={(ev) => setSenha(ev.target.value)}
        />

        <BotaoAcao
          theme="light"
          onClick={() => {
            dispatch(setInformacoes({
              cpfCnpj: cpf,
              user,
              nome,
              email,
              telefone,
              dataNascimento,
              senha,
            }));
            navigate('/cadastrar/endereco');
          }}>Próximo</BotaoAcao>
      </FormCadastro>
    </SegundaEtapa>
  );
}

export default InformacoesPessoa;
