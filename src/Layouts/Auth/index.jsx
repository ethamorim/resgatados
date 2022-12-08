import PataVoltar from 'Components/PataVoltar';

import Pata from 'Assets/Images/pata.svg';
import PataOutline from 'Assets/Images/pata_outline.svg'

import './style.scss';

function Auth(props) {
  return (
    <div className='screen'>
      {props.children}

      <div className='footer-bg-cdst'>
        <footer>
          <PataVoltar />
        </footer>

        <article className="auth-footer-bg">
          <img src={PataOutline} alt="" className="pata-outline bg" />
          <img src={Pata} alt="" className="pata bg" />
        </article>
      </div>
    </div>
  );
}

export default Auth;
