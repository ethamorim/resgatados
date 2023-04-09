import { useState } from "react";

import Auth from "Layouts/Auth";
import PataTitulo from 'Components/PataTitulo';
import FormCadastro from "Layouts/FormCadastro";
import BotaoAcao from "Components/Botao/BotaoAcao";
import { setUsuarioAtivo } from "Services/UsuarioLoader";

import sheet from './style.module.scss';
import { useNavigate } from "react-router-dom";
import axios from 'App/axios';

function Entrar() {
  const [ login, setLogin ] = useState();
  const [ senha, setSenha ] = useState();
  const navigate = useNavigate();

  const handleEntrar = async () => {
    try {
      if (!login || !senha)
        throw new Error('Login e senha obrigatórios');

      const { data } = await axios.get('/usuarios');
      const usuario = data.find(el => el.user === login);
      if (!usuario || usuario.senha !== senha) {
        throw new Error('Usuário ou senha inválidos');
      }

      setUsuarioAtivo(usuario);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Auth>
      <div className={sheet.entrar}>
        <PataTitulo>Entre na sua conta</PataTitulo>

        <FormCadastro>
          <label htmlFor="email">usuário ou email:</label>
          <input id="email" onChange={(ev) => {
            setLogin(ev.target.value);
          }} />

          <label htmlFor="senha">senha:</label>
          <input id="senha" type="password" onChange={(ev) => {
            setSenha(ev.target.value);
          }} />

          <BotaoAcao theme="dark" onClick={handleEntrar}>
            Entrar
          </BotaoAcao>
        </FormCadastro>
      </div>
    </Auth>
  );
}

export default Entrar;
