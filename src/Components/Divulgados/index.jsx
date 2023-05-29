import CardPet from "Components/CardPet";
import sheet from './style.module.scss';
import { Link } from "react-router-dom";

function Divulgados(props) {
  const divulgados = props.divulgados
    ? props.divulgados.map(el => (
      <CardPet pet={el} key={el.id} />
    ))
    : '';

  return (
    <div className={sheet.divulgadosConteiner}>
      <section className={sheet.divulgados}>
        <div>
          { divulgados }
        </div>
        { props.divulgados ? '' : <span>Animais divulgados por você aparecerão aqui</span> }
      </section>

      <article className={sheet.divulgarNovo}>
        <Link to="/divulgar-animal">Divulgar Novo Animal</Link>
      </article>
    </div>
  );
}

export default Divulgados;
