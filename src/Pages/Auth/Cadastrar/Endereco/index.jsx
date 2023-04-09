import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SegundaEtapa from 'Layouts/SegundaEtapa';
import BotaoAcao from 'Components/Botao/BotaoAcao';
import FormCadastro from 'Layouts/FormCadastro';

import { setEnderecoUsuario } from 'Features/Cadastro/cadastroSlice';

import axios from 'App/axios';

function Endereco() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cadastro = useSelector(state => state.cadastro);

  const [ cep, setCep ] = useState('');
  const [ endereco, setEndereco ] = useState('');
  const [ complemento, setComplemento ] = useState('');
  const [ numero, setNumero ] = useState('');
  const [ cidade, setCidade ] = useState('');
  const [ estado, setEstado ] = useState('');

  useEffect(() => {
    dispatch(setEnderecoUsuario({
      cep,
      endereco,
      complemento,
      numero,
      cidade,
      estado
    }));
  }, [
    cep,
    endereco,
    complemento,
    numero,
    cidade,
    estado
  ]);

  return (
    <SegundaEtapa titulo="Endereço">
      <FormCadastro>
          <label htmlFor="cep">cep:</label>
          <input
            id="cep"
            value={cep}
            onChange={(ev) => setCep(ev.target.value)}
          />

          <label htmlFor="endereco">endereco:</label>
          <input
            id="endereco"
            value={endereco}
            onChange={(ev) => setEndereco(ev.target.value)}
          />

          <label htmlFor="complemento">complemento:</label>
          <input
            id="complemento"
            value={complemento}
            onChange={(ev) => setComplemento(ev.target.value)}
          />

          <label htmlFor="numero">número:</label>
          <input
            id="numero"
            value={numero}
            onChange={(ev) => setNumero(ev.target.value)}
          />

          <label htmlFor="cidade">cidade:</label>
          <input
            id="cidade"
            value={cidade}
            onChange={(ev) => setCidade(ev.target.value)}
          />

          <label htmlFor="estado">estado:</label>
          <input
            id="estado"
            value={estado}
            onChange={(ev) => setEstado(ev.target.value)}
          />

          <BotaoAcao theme="dark" onClick={async () => {
            let objetoCadastro = new Object();
            const info = cadastro.informacoes;
            const ende = cadastro.endereco;

            if (cadastro.objetivo === 'A')
              objetoCadastro = {
                cpf_cnpj: info.cpf,
                user: info.user,
                nome: info.nome,
                email: info.email,
                data_nascimento: info.dataNascimento,
                senha: info.senha,
                cep: ende.cep,
                endereco: ende.endereco,
                complemento: ende.complemento,
                numero: ende.numero,
                cidade: ende.cidade,
                estado: ende.estado,
                tipo: cadastro.objetivo,
              };
            else
              objetoCadastro = {
                cpf_cnpj: info.cpfCnpj,
                user: info.user,
                nome: info.nome,
                email: info.email,
                senha: info.senha,
                cep: ende.cep,
                endereco: ende.endereco,
                complemento: ende.complemento,
                numero: ende.numero,
                cidade: ende.cidade,
                estado: ende.estado,
                tipo: cadastro.objetivo,
              }
            await axios.post('/usuarios', objetoCadastro);
            navigate('/');
          }}>Cadastrar</BotaoAcao>
      </FormCadastro>
    </SegundaEtapa>
  );
}

export default Endereco;
