import { createBrowserRouter, Navigate } from "react-router-dom";
import TelaInicial from "../pages/TelaInicial";
import Entrar from "../pages/Auth/Entrar/Entrar";
import CadastroObjetivo from "../pages/Auth/Cadastro/CadastroObjetivo";

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
  }
]);
