import CoroaContribuinte from 'Assets/Images/coroa-contribuinte.svg'

import sheet from '../style.module.scss';

function SobreAdotante(props) {
  const user = props.sobre;

  const tagContribuinte = user.contribuinte
    ? (
      <div className={sheet.tagContribuinte}>
        <img src={CoroaContribuinte} alt="" />
        <span>{user.nome} é contribuinte!</span>
        <p>Isso significa que essa pessoa contribui mensalmente para ajudar às instituições com o resgate dos animais.</p>
      </div>
    )
    : '';

  return (
    <section>
      <div className={sheet.sobre}>
        <div className={sheet.row}>
          <div>
            <label>objetivo:</label>
            <span>Adotar</span>
          </div>

          {/* <div>
            <label>idade:</label>
            <span>{idade} anos</span>
          </div> */}
        </div>

        <label>mora em:</label>
        <span>{user.endereco}</span>

        <label>mais sobre:</label>
        <p>{user.descricao}</p>
      </div>

      { tagContribuinte }
    </section>
  );
}

export default SobreAdotante;
