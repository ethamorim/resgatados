import PataVoltar from 'Components/PataVoltar';
import styles from './style.module.scss';

import BotaoAcao from "Components/Botao/BotaoAcao";

export default function DivulgarAnimal() {
  return (
    <>
      <header>
        <PataVoltar />
      </header>

      <form className={`${styles.divulgarAnimalForm}`}>
        <legend>Divulgar um novo animal</legend>

        <fieldset className={`${styles.infoBasica}`}>
          <input type="file" className={`${styles.fotoAnimal}`} />

          <section>
            <label>nome:</label>
            <input />

            <label>idade:</label>
            <input />
          </section>
        </fieldset>

        <fieldset>
          <label>sexo:</label>
          <select>
            <option value='M'>Macho</option>
            <option value='F'>Fêmea</option>
          </select>

          <select></select>
        </fieldset>

        <fieldset>
          <textarea></textarea>
        </fieldset>

        <fieldset></fieldset>

        <fieldset></fieldset>

        <BotaoAcao theme='dark'>Divulgar</BotaoAcao>
      </form>
    </>
  )
}
