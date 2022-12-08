import PataOutline from 'Assets/Images/pata_outline.svg';

import sheet from './style.module.scss';

function PataOutlineTitulo(props) {
  return (
    <header className={sheet.headerPataOutTitulo}>
      <img src={PataOutline} alt="" />

      <div className={sheet.tituloConteiner}>
        <h2>{ props.children }</h2>
      </div>
    </header>
  );
}

export default PataOutlineTitulo;
