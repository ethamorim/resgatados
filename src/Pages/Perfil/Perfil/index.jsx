import { Link, useLoaderData } from "react-router-dom";

import PataVoltar from "Components/PataVoltar";
import Tabs from "Layouts/Tabs";
import Adotados from "Components/Adotados";
import Sobre from "Components/Sobre";

import CoroaContribuinte from 'Assets/Images/coroa-contribuinte.svg';

import sheet from './style.module.scss';

function Perfil() {
  const usuario = useLoaderData();

  const fotoPerfil = usuario.contribuinte
    ? (
      <div className={`${sheet.foto} ${sheet.contribuinte}`}>
        <img src={CoroaContribuinte} alt="" className={sheet.coroa} />
        <img src={require('Assets/Images/' + usuario.img)} alt="" />
      </div>
    )
    : (
      <div className={sheet.foto}>
        <img src={require('Assets/Images/' + usuario.img)} alt="" />
      </div>
    );

  return (
    <div>
      <main className={sheet.perfil}>
        <header>
          <PataVoltar theme="light" />

          <Link to={`/perfil/${usuario.user}/config`}>
            <img src={require("Assets/Images/icon_config.png")} alt="" />
          </Link>
        </header>

        <section>
          {fotoPerfil}

          <h2 className={sheet.nome}>{ usuario.nome }</h2>
        </section>
      </main>

      <Tabs
        tabs={[
          {
            tab: "Adotados",
            component: <Adotados adotados={usuario.adotados} />,
          },
          {
            tab: "Sobre",
            component: <Sobre sobre={usuario} />,
          }
        ]}
      />
    </div>
  );
}

export default Perfil;
