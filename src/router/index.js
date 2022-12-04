import { createBrowserRouter, Navigate } from "react-router-dom";

import TelaInicial from "../pages/TelaInicial";
import Entrar from "../pages/Auth/Entrar/Entrar";

import CadastroObjetivo from "../pages/Auth/Cadastro/CadastroObjetivo";
import CadastroPessoa from '../pages/Auth/Cadastro/CadastroPessoa';
import InformacoesPessoais from '../pages/Auth/Cadastro/InformacoesPessoais';
import InformacoesInstituicao from '../pages/Auth/Cadastro/InformacoesInstituicao';
import Endereco from '../pages/Auth/Cadastro/Endereco';

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
    element: <CadastroObjetivo />
  },
  {
    path: '/cadastrar/pessoa',
    element: <CadastroPessoa />
  },
  {
    path: '/cadastrar/pessoa/fisica',
    element: <InformacoesPessoais />
  },
  {
    path: '/cadastrar/pessoa/juridica',
    element: <InformacoesInstituicao />
  },
  {
    path: '/cadastrar/endereco',
    element: <Endereco />
  }
]);
