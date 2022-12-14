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
    <Screen className={sheet.screenHome}>
      <header>
        <Link to="/perfil/deisantix">
          <img src={require('Assets/Images/ytalo.jpg')} alt="" />
        </Link>
      </header>

      <main className={sheet.home}>
        { pets }
      </main>
    </Screen>
  );
}

export default Home;
