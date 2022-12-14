import CardPet from 'Components/CardPet';
import sheet from './style.module.scss';

function Adotados(props) {
  return (
    <section className={sheet.adotados}>
      {props.adotados.map(el => (
        <CardPet pet={el} key={el.id} />
      ))}
    </section>
  );
}

export default Adotados;
