import PataVoltar from '../../Components/PataVoltar';

import Screen from '../../Layouts/Screen';
import Pata from '../../Assets/Images/pata.svg';
import PataOutline from '../../Assets/Images/pata_outline.svg'

import sheet from './style.module.scss';

function Auth(props) {
  return (
    <Screen>
      {props.children}

      <div className={sheet.footerBgResg}>
        <footer>
          <PataVoltar />
        </footer>

        <article className={sheet.footerBgAuth}>
          <img src={PataOutline} alt="" className={sheet.pataOutline} />
          <img src={Pata} alt="" className={sheet.pata} />
        </article>
      </div>
    </Screen>
  );
}

export default Auth;
