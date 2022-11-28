import PataOutline from '../assets/images/pata_outline.svg';

function PataOutlineTitulo(props) {
  return (
    <header className="ptouttl-header">
      <img src={PataOutline} alt="" className='bg' />

      <div className='titulo-conteiner'>
        <h2>{ props.children }</h2>
      </div>
    </header>
  );
}

export default PataOutlineTitulo;
