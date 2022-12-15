import Screen from "Layouts/Screen";
import CardPet from "Components/CardPet";

import sheet from './style.module.scss';
import { Link, useLoaderData } from "react-router-dom";

function Home() {
  const dadosPets = useLoaderData();

  const pets = dadosPets.map(el => {
    return (
      <CardPet key={el.id} pet={el} />
    );
  });

  return (
    <div>
      <header className={sheet.homeHeaderConteiner}>
        <div className={sheet.homeHeader}>
          <Link to="/perfil/deisantix" className={sheet.linkPerfil}>
            <img src={require('Assets/Images/ytalo.jpg')} alt="" />
          </Link>
        </div>
      </header>

      <Screen className={sheet.screenHome}>
        <main className={sheet.home}>
          { pets }
        </main>
      </Screen>
    </div>
  );
}

export default Home;
