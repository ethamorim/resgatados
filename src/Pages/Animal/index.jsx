import BotaoLink from "Components/BotaoLink";
import PataVoltar from "Components/PataVoltar";
import Tag from "Components/Tag";
import { useLoaderData } from "react-router-dom";

import sheet from './style.module.scss';

function Animal() {
  const pet = useLoaderData();
  const divulgante = pet.divulgante;

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

      <section className={sheet.petConteiner}>
        <h1>{pet.nome}, {pet.idade} anos</h1>

        {pet.tags.map(el => (
          <Tag tag={el} />
        ))}

        <p className={sheet.descricao}>{pet.descricao}</p>

        <div className={sheet.botoes}>
          <BotaoLink theme="light">Adotar <i className="material-icons">add_moderator</i></BotaoLink>
          <BotaoLink theme="dark">Compartilhar <i className="material-icons">share</i></BotaoLink>
        </div>

        <article className={sheet.divulgante}>
          <h3>Informações da Instituição:</h3>
          <span className={sheet.divulganteNome}>{divulgante.nome}</span>

          <p className={sheet.divulganteDescricao}>{divulgante.descricao}</p>

          <h3>Endereço:</h3>
          <span className={sheet.divulganteEndereco}>{divulgante.endereco}</span>
        </article>
      </section>
    </div>
  );
}

export default Animal;
