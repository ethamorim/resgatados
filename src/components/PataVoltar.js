import { useNavigate } from 'react-router-dom';

function PataVoltar(props) {
  const navigate = useNavigate();

  return (
    <div className='pata-voltar' onClick={() => {
      navigate(-1);
    }}>
      <img src={require('../assets/images/pata_escura.png')} alt="" />
      <span>Voltar</span>
    </div>
  );
}

export default PataVoltar;
