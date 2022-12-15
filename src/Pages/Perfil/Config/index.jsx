import PataVoltar from "Components/PataVoltar";
import { Link } from "react-router-dom";

import sheet from './style.module.scss';

function PerfilConfig() {
  return (
    <div>
      <header>
        <PataVoltar />
      </header>

      <Link to="/" className={sheet.linkSair}>Sair</Link>
    </div>
  );
}

export default PerfilConfig;
