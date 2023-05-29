import sheet from '../style.module.scss';

function SobreDivulgante(props) {
  const user = props.sobre;

  return (
    <section>
      <div className={sheet.sobre}>
        <label>sobre:</label>
        <p>{user.descricao}</p>

        <label>endereço:</label>
        <span>{user.endereco}</span>

        {/* <label>contatos</label> */}
        {/* <span>{user.contatos[0]} {user.contatos[1]}</span> */}
      </div>
    </section>
  );
}

export default SobreDivulgante;
