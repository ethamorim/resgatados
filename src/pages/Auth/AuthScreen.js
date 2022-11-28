import PataVoltar from '../../components/PataVoltar';

import PataOutline from '../../assets/images/pata_outline.svg';
import Pata from '../../assets/images/pata.svg';

function AuthScreen(props) {
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

export default AuthScreen;
