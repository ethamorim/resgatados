import './assets/styles/App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import TelaInicial from './pages/TelaInicial';
import Entrar from './pages/Auth/Entrar/Entrar';
import CadastroObjetivo from './pages/Auth/Cadastro/CadastroObjetivo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <TelaInicial />
          }></Route>

          <Route path='/entrar' element={
            <Entrar />
          }></Route>

          <Route path='/cadastrar' element={
            <Navigate to='/cadastrar/objetivo' replace={true} />
          }></Route>

          <Route path='/cadastrar/objetivo' element={
            <CadastroObjetivo />
          }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
