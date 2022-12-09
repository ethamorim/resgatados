import { useNavigate } from 'react-router-dom';

import sheet from './style.module.scss';

function PataVoltar(props) {
  const navigate = useNavigate();
  const theme = props.theme
    ? sheet[props.theme]
    : sheet.black;

  let img;
  switch (props.theme) {
    case 'light':
      img = 'pata_clara.png';
      break;
    default:
      img = 'pata_escura.png';
  }

  return (
    <div className={`${sheet.pataVoltar} ${theme}`} onClick={() => {
      navigate(-1);
    }}>
      <img src={require(`Assets/Images/${img}`)} alt="" />
      <span>Voltar</span>
    </div>
  );
}

export default PataVoltar;
