import { Link, useLoaderData } from "react-router-dom";

import PataVoltar from "Components/PataVoltar";
import Tabs from "Layouts/Tabs";
import Adotados from "Components/Adotados";
import SobreAdotante from "Components/Sobre/Adotante";

import CoroaContribuinte from 'Assets/Images/coroa-contribuinte.svg';
import EscudoVerificado from 'Assets/Images/escudo-verificado.svg';

import sheet from './style.module.scss';
import SobreDivulgante from "Components/Sobre/Divulgante";
import Divulgados from "Components/Divulgados";
import { getUsuarioAtivo } from "Services/UsuarioLoader";

function Perfil() {
  const usuario = useLoaderData();
  const usuarioAtivo = getUsuarioAtivo();

  const renderAdotante = () => {
    const fotoPerfil = usuario.contribuinte
    ? (
      <div className={`${sheet.foto} ${sheet.contribuinte}`}>
        <img src={CoroaContribuinte} alt="" className={sheet.coroa} />
        <img src={require('Assets/Images/users/no-icon.png')} alt="" />
      </div>
    )
    : (
      <div className={sheet.foto}>
        <img src={require('Assets/Images/users/no-icon.png')} alt="" />
      </div>
    );

    const tabs = [
      {
        tab: "Adotados",
        component: <Adotados adotados={usuario.adotados} />,
      },
      {
        tab: "Sobre",
        component: <SobreAdotante sobre={usuario} />,
      }
    ]
    return {
      fotoPerfil,
      tabs
    }
  };

  const renderDivulgante = () => {
    const fotoPerfil = usuario.verificado
      ? (
        <div className={`${sheet.foto} ${sheet.verificado}`}>
          <img src={EscudoVerificado} alt="" className={sheet.escudo} />
          <img src={require('Assets/Images/users/no-icon.png')} alt="" />
        </div>
      )
      : (
        <div className={sheet.foto}>
          <img src={require('Assets/Images/users/no-icon.png')} alt="" />
        </div>
      );

    const tabs = [
      {
        tab: 'Divulgados',
        component: <Divulgados divulgados={usuario.divulgados} />
      },
      {
        tab: 'Sobre',
        component: <SobreDivulgante sobre={usuario} />
      }
    ];
    // if (usuarioAtivo.user === usuario.user)
    //   tabs.splice(1, 0, {
    //     tab: 'Solicitações',
    //     component: 'Solicitações'
    //   });

    return {
      fotoPerfil,
      tabs
    }
  };

  let comps;
  if (usuario.tipo === 'A') {
    comps = renderAdotante();
  } else {
    comps = renderDivulgante();
  }

  return (
    <div>
      <main className={sheet.perfil}>
        <header>
          <PataVoltar theme="light" />

          {
            usuarioAtivo.user === usuario.user
              ? (
                <Link to={`/perfil/${usuario.user}/config`}>
                  <img src={require("Assets/Images/icon_config.png")} alt="" />
                </Link>
              )
              : ''
          }
        </header>

        <section>
          {comps.fotoPerfil}

          <h2 className={sheet.nome}>{ usuario.nome }</h2>
        </section>
      </main>

      <Tabs
        tabs={comps.tabs}
      />

      {
        usuarioAtivo.tipo === 'D' && usuario.cpf === usuarioAtivo.cpf
          ? (
            <article className={sheet.divulgarNovo} role="divulgar-novo">
              <Link to="/divulgar-animal">Divulgar Novo Animal</Link>
            </article>
          )
          : null
      }
    </div>
  );
}

export default Perfil;
