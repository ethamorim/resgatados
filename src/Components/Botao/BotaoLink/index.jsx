import { Link } from "react-router-dom";

import sheet from '../style.module.scss';

function BotaoLink(props) {
  const cls = props.theme
    ? `${sheet.btn} ${sheet[props.theme]}`
    : sheet.btn;

  return (
    <Link to={props.to} className={cls}>
      {props.children}
    </Link>
  );
}

export default BotaoLink;
