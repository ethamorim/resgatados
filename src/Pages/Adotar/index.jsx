import BotaoAcao from "Components/Botao/BotaoAcao";
import PataVoltar from "Components/PataVoltar";
import Screen from "Layouts/Screen";
import { useLoaderData } from "react-router-dom";

import sheet from './style.module.scss';

function Adotar() {
  const pet = useLoaderData();

  return (
    <Screen>
      <header>
        <PataVoltar />
      </header>

      <form className={sheet.formAdocao}>
        <legend>Adoção</legend>

        <fieldset>
          <label>nome do animal:</label>
          <input />
          <p className={sheet.obsNome}>A instituição define se o animal pode ter seu nome redefinido. Existem situações em que o animal não se acostumaria com um novo nome</p>
        </fieldset>

        <fieldset>
          <label>você prefere:</label>
          <select>
            <option>Buscar o animal</option>
            <option>Tê-lo entregue</option>
          </select>
        </fieldset>

        <fieldset>
          <label>você reside com outros animais?</label>
          <select>
            <option>Sim</option>
            <option>Não</option>
          </select>
        </fieldset>

        <fieldset>
          <label>por favor, especifique a quantidade dos animais e as espécies (cão, gato, outros):</label>
          <textarea></textarea>
        </fieldset>

        <fieldset className={sheet.endereco}>
          <h3>Seu Endereço:</h3>
          <p>Ed. Continental, apt. 104, Av. Álvares Calheiros, Jatiúca, Maceió-AL</p>
        </fieldset>

        <fieldset className={sheet.botaoSolicitar}>
          <p className={sheet.obsSolicitar}>Todas suas informações serão analisadas pelos critérios da instituição para definir se você está apto para receber o pet!</p>
          <BotaoAcao theme="dark">Solicitar Adoção</BotaoAcao>
        </fieldset>
      </form>
    </Screen>
  );
}

export default Adotar;
