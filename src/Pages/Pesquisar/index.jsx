import { useState } from 'react';
import { Link } from 'react-router-dom';
import Screen from 'Layouts/Screen';
import PataVoltar from 'Components/PataVoltar';

import sheet from './style.module.scss';
// import { getUsuarios } from 'Services/UsuarioLoader';

function Pesquisar() {
  const [ pesquisa, setPesquisa ] = useState('');
  const [ resultados, setResultados ] = useState([]);

  const handleClick = () => {
    if (!pesquisa) {
      setResultados([]);
      return;
    }

    // const usuarios = getUsuarios();
    // setResultados(usuarios.filter(el => el.user.includes(pesquisa)));
  };

  return (
    <div>
      <div className={sheet.telaPesquisar}>
        <header>
          <PataVoltar theme="light" />
        </header>

        <form>
          <fieldset className={sheet.pesquisar}>
            <label htmlFor='pesquisar'>pesquisar:</label>

            <div className={sheet.inputConteiner}>
              <input id='pesquisar' onChange={(ev) => {
                setPesquisa(ev.target.value);
              }} />
              <i className='material-icons' onClick={handleClick}>
                search
              </i>
            </div>
          </fieldset>
        </form>
      </div>

      <Screen>
        <section className={sheet.resultados}>
          {resultados.map(el => (
            <Link to={`/perfil/${el.user}`} className={sheet.resultado} key={el.user}>
              <img src={require('Assets/Images/users/' + el.img)} alt="" />
              <span>{ el.user }</span>
            </Link>
          ))}
        </section>
      </Screen>
    </div>
  );
}

export default Pesquisar;
