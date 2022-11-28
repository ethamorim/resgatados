import './assets/styles/App.scss';

import Entrar from './pages/Auth/Entrar/Entrar';
import CadastroObjetivo from './pages/Auth/Cadastro/CadastroObjetivo';
import CadastroPessoa from './pages/Auth/Cadastro/CadastroPessoa';
import SegundaEtapa from './pages/Auth/Cadastro/SegundaEtapa';

function App() {
  return (
    <div className="App">
      <SegundaEtapa titulo="Informações da instituição"></SegundaEtapa>
    </div>
  );
}

export default App;
