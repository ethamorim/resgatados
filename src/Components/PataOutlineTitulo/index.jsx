import PataOutline from 'Assets/Images/pata_outline.svg';

import './style.scss';

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
