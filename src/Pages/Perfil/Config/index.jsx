import PataVoltar from "Components/PataVoltar";
import { useNavigate } from "react-router-dom";
import { setUsuarioAtivo } from "Services/UsuarioLoader";

import sheet from './style.module.scss';

function PerfilConfig() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <PataVoltar />
      </header>

      <span className={sheet.linkSair} onClick={() =>{
        setUsuarioAtivo(null);
        navigate('/');
      }}>Sair</span>
    </div>
  );
}

export default PerfilConfig;
