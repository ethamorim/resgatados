import { useNavigate } from 'react-router-dom';

import sheet from './style.module.scss';

function PataVoltar(props) {
  const navigate = useNavigate();

  return (
    <div className={sheet.pataVoltar} onClick={() => {
      navigate(-1);
    }}>
      <img src={require('Assets/Images/pata_escura.png')} alt="" />
      <span>Voltar</span>
    </div>
  );
}

export default PataVoltar;
