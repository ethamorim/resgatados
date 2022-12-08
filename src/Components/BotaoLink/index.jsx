import { Link } from "react-router-dom";

import './style.scss';

function BotaoLink(props) {
  const cls = props.theme
    ? 'btn ' + props.theme
    : 'btn';

  return (
    <Link to={props.to} className={cls}>
      {props.children}
    </Link>
  );
}

export default BotaoLink;
