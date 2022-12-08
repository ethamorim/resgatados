import PataOutlineEscura from 'Assets/Images/pata_outline_escura.svg';

import sheet from './style.module.scss';

function CardPet(props) {
  const pet = props.pet;

  return (
    <div className={sheet.cardPet}>
      <div className={sheet.fotoConteiner}>
        <img src={pet.img} alt="" />
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
