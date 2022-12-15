import { createBrowserRouter, Navigate } from "react-router-dom";

import TelaInicial from "../Pages/TelaInicial";
import Entrar from "../Pages/Auth/Entrar";

import Objetivo from "../Pages/Auth/Cadastrar/Objetivo";
import Pessoa from '../Pages/Auth/Cadastrar/Pessoa';
import InformacoesPessoa from '../Pages/Auth/Cadastrar/InformacoesPessoa';
import InformacoesInstituicao from '../Pages/Auth/Cadastrar/InformacoesInstituicao';
import Endereco from '../Pages/Auth/Cadastrar/Endereco';

import Home from '../Pages/Home';
import Animal from "Pages/Animal";
import Adotar from "Pages/Adotar";

import Perfil from "Pages/Perfil/Perfil";
import PerfilConfig from 'Pages/Perfil/Config';

import getAnimals from "Services/AnimalLoader";
import getUsuarios from "Services/UsuarioLoader";

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
    element: <Objetivo />,
  },
  {
    path: '/cadastrar/pessoa',
    element: <Pessoa />,
  },
  {
    path: '/cadastrar/pessoa/fisica',
    element: <InformacoesPessoa />,
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
    loader: () => getAnimals(),
  },
  {
    path: '/home/:animal',
    element: <Animal />,
    loader: ({ params }) => {
      return getAnimals(params.animal);
    }
  },
  {
    path: '/home/:animal/adotar',
    element: <Adotar />,
    loader: ({ params }) => {
      return getAnimals(params.animal);
    }
  },
  {
    path: 'perfil/:username',
    element: <Perfil />,
    loader: ({ params }) => {
      return getUsuarios(params.username);
    }
  },
  {
    path: 'perfil/:username/config',
    element: <PerfilConfig />
  }
]);
