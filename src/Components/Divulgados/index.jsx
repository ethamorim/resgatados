import CardPet from "Components/CardPet";
import sheet from './style.module.scss';

function Divulgados(props) {
  const divulgados = props.divulgados
    ? props.divulgados.map(el => (
      <CardPet pet={el} key={el.id} />
    ))
    : '';

  return (
    <section className={sheet.divulgados}>
      <div>
        { divulgados }
      </div>
      { props.divulgados ? '' : <span>Animais divulgados por você aparecerão aqui</span> }
    </section>
  );
}

export default Divulgados;
