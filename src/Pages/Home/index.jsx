import { Link, useLoaderData } from "react-router-dom";
import Screen from "Layouts/Screen";
import CardPet from "Components/CardPet";
import { getUsuarioAtivo } from "Services/UsuarioLoader";

import sheet from './style.module.scss';

function Home() {
  const dadosPets = useLoaderData();
  const usuario = getUsuarioAtivo()

  const getCardsPets = () => {
      return dadosPets.map(el => {
        return (
          <CardPet key={el.id} pet={el} />
        );
      });
  };

  return (
    <div>
      <header className={sheet.homeHeaderConteiner}>
        <div className={sheet.homeHeader}>
          <Link to='/pesquisar' className={sheet.pesquisar}>
            <i className='material-icons'>search</i>
          </Link>

          <Link to={`/perfil/${usuario.user}`} className={sheet.linkPerfil}>
            <img src={require(`Assets/Images/users/no-icon.png`)} alt="" />
          </Link>
        </div>
      </header>

      <Screen className={sheet.screenHome}>
        <main className={sheet.home}>
          { getCardsPets() }
        </main>
      </Screen>

      {
        (usuario.tipo === 'divulgador')
          ? (
            <Link to='/divulgar-animal'>Adicionar Animal</Link>
          )
          : null
      }
    </div>
  );
}

export default Home;
