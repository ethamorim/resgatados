import BotaoLink from "Components/BotaoLink";
import PataVoltar from "Components/PataVoltar";
import { useLoaderData } from "react-router-dom";

import sheet from './style.module.scss';

function Animal() {
  const pet = useLoaderData();

  return (
    <div>
      <header className={sheet.header}>
        <PataVoltar theme="light" />
      </header>

      <img
        src={require(`Assets/Images/pets/${pet.img}`)}
        alt=""
        className={sheet.fotoPet}
      />

      <div className={sheet.petConteiner}>
        <h1>{pet.nome}, {pet.idade} anos</h1>

        <BotaoLink theme="light">Adotar <span className="material-icons">add_moderator</span></BotaoLink>
        <BotaoLink theme="dark">Compartilhar <span className="material-icons">share</span></BotaoLink>
      </div>
    </div>
  );
}

export default Animal;
