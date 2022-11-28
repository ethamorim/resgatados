import './assets/styles/App.scss';

import Entrar from './pages/Auth/Entrar/Entrar';
import CadastroObjetivo from './pages/Auth/Cadastro/CadastroObjetivo';
import CadastroPessoa from './pages/Auth/Cadastro/CadastroPessoa';
import InformacoesInstituicao from './pages/Auth/Cadastro/InformacoesInstituicao';
import InformacoesPessoais from './pages/Auth/Cadastro/InformacoesPessoais';
import Endereco from './pages/Auth/Cadastro/Endereco';

function App() {
  return (
    <div className="App">
      <Endereco />
    </div>
  );
}

export default App;
