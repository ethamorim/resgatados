import PataVoltar from 'Components/PataVoltar';
import styles from './style.module.scss';


import BotaoAcao from "Components/Botao/BotaoAcao";
import { useState } from 'react';
import axios from '../../App/axios';
import { getUsuarioAtivo } from 'Services/UsuarioLoader';
import { useNavigate } from 'react-router-dom';

export default function DivulgarAnimal() {
  const navigate = useNavigate()

  const [ nome, setNome ] = useState('');
  const [ dataNascimento, setDataNascimento ] = useState('');
  const [ sexo, setSexo ] = useState('M');
  const [ especie, setEspecie ] = useState('');
  const [ descricao, setDescricao ] = useState('');
  const [ mudarNome, setMudarNome ] = useState(false);

  const handleClick = async () => {
    const usuarioAtivo = getUsuarioAtivo()
    try {
      await axios.post('/animais', {
        nome,
        dataNascimento,
        sexo,
        especie,
        descricao,
        mudarNome,
        divulgador: usuarioAtivo.cpf
      });

      navigate(`/perfil/${usuarioAtivo.user}`)
    } catch (error) {
      alert(error.response.data.erro);
    }
  }

  return (
    <>
      <header>
        <PataVoltar />
      </header>

      <form className={`${styles.divulgarAnimalForm}`}>
        <legend>Divulgar um novo animal</legend>

        <fieldset className={`${styles.fieldset} ${styles.infoBasica}`}>
          <input type="file" className={`${styles.fotoAnimal}`} />

          <section>
            <label className={`${styles.pompiere}`}>nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(ev) => setNome(ev.target.value)}
            />

            <label className={`${styles.pompiere}`}>data nascimento (aprox.):</label>
            <input
              type="date"
              value={dataNascimento}
              onChange={(ev) => setDataNascimento(ev.target.value)}
            />
          </section>
        </fieldset>

        <fieldset className={`${styles.row} ${styles.fieldset} ${styles.sexoEspecie}`}>
          <div>
            <label className={`${styles.pompiere}`}>sexo:</label>
            <select
              value={sexo}
              onChange={(ev) => setSexo(ev.target.value)}>
              <option value='M'>Macho</option>
              <option value='F'>Fêmea</option>
            </select>
          </div>

          <div>
            <label className={`${styles.pompiere}`}>espécie:</label>
            <select
              value={especie}
              onChange={(ev) => setEspecie(ev.target.value)}>
              <option value=''>Selecione...</option>
              <option value='gato'>Gato</option>
              <option value='cachorro'>Cachorro</option>
            </select>
          </div>
        </fieldset>

        <fieldset className={`${styles.fieldset} ${styles.descricao}`}>
          <label className={`${styles.pompiere}`}>descrição:</label>
          <textarea
            defaultValue={descricao}
            onChange={(ev) => setDescricao(ev.target.value)}>
          </textarea>
          <p className={`${styles.obs}`}>Dica: escreva sobre a personalidade do animal e sua jornada até aqui</p>
        </fieldset>

        <fieldset className={`${styles.fieldset} ${styles.row} ${styles.mudarNome}`}>
          <input
            type='checkbox'
            checked={mudarNome}
            onChange={(ev) => setMudarNome(ev.target.checked)}
          />
          <label>Permitir o adotante mudar o nome do animal na adoção</label>
        </fieldset>

        <fieldset className={`${styles.fieldset} ${styles.tags}`}>
          <label className={`${styles.pompiere}`}>tags:</label>
          <input />
          <p className={`${styles.obs}`}>Ex.: preto, vacinado, brincalhão</p>
        </fieldset>

        <BotaoAcao theme='dark' onClick={handleClick}>Divulgar</BotaoAcao>
      </form>
    </>
  )
}
