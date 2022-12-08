import { createBrowserRouter, Navigate } from "react-router-dom";

import TelaInicial from "../Pages/TelaInicial";
import Entrar from "../Pages/Auth/Entrar";

import CadastroObjetivo from "../Pages/Auth/Cadastrar/Objetivo";
import CadastroPessoa from '../Pages/Auth/Cadastrar/Pessoa';
import InformacoesPessoais from '../Pages/Auth/Cadastrar/InformacoesPessoa';
import InformacoesInstituicao from '../Pages/Auth/Cadastrar/InformacoesInstituicao';
import Endereco from '../Pages/Auth/Cadastrar/Endereco';

import Home from '../Pages/Home';

export default createBrowserRouter([
  {
    path: '/',
    element: <TelaInicial />,
  },
  {
    path: '/entrar',
    element: <Entrar />,
  },
  {
    path: '/cadastrar',
    element: <Navigate to='/cadastrar/objetivo' replace={true} />,
  },
  {
    path: '/cadastrar/objetivo',
    element: <CadastroObjetivo />,
  },
  {
    path: '/cadastrar/pessoa',
    element: <CadastroPessoa />,
  },
  {
    path: '/cadastrar/pessoa/fisica',
    element: <InformacoesPessoais />,
  },
  {
    path: '/cadastrar/pessoa/juridica',
    element: <InformacoesInstituicao />,
  },
  {
    path: '/cadastrar/endereco',
    element: <Endereco />,
  },
  {
    path: '/home',
    element: <Home />,
  }
]);
