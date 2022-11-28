import './assets/styles/App.scss';

import Entrar from './pages/Auth/Entrar/Entrar';
import CadastroObjetivo from './pages/Auth/Cadastro/CadastroObjetivo';
import CadastroPessoa from './pages/Auth/Cadastro/CadastroPessoa';
import InformacoesInstituicao from './pages/Auth/Cadastro/InformacoesInstituicao';

function App() {
  return (
    <div className="App">
      <InformacoesInstituicao />
    </div>
  );
}

export default App;
