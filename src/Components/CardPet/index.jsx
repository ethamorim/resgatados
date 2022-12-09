import { useNavigate } from 'react-router-dom';

import PataOutlineEscura from 'Assets/Images/pata_outline_escura.svg';

import sheet from './style.module.scss';

function CardPet(props) {
  const pet = props.pet;
  const navigate = useNavigate();

  return (
    <div className={sheet.cardPet} onClick={() => navigate(`/home/${pet.id}`)}>
      <div className={sheet.fotoConteiner}>
        <img src={require(`Assets/Images/pets/${pet.img}`)} alt="" />
      </div>

      <div className={sheet.infoConteiner}>
        <span>{pet.nome}, {pet.idade}</span>
        <span>{pet.divulgante}</span>
      </div>

      <img src={PataOutlineEscura} className={sheet.bgPataDeco} />
    </div>
  );
}

export default CardPet;
