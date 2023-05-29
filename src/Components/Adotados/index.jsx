import CardPet from 'Components/CardPet';
import sheet from './style.module.scss';

function Adotados(props) {
  const adotados = props.adotados
    ? props.adotados.map(el => (
      <CardPet pet={el} key={el.id} />
    ))
    : '';

  return (
    <section className={sheet.adotados}>
      <div>
        { adotados }
      </div>
      { props.adotados ? '' : <span>Animais adotados por você aparecerão aqui.</span> }
    </section>
  );
}

export default Adotados;
