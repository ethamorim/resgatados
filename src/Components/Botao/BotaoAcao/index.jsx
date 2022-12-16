import sheet from '../style.module.scss';

function BotaoAcao(props) {
  const cls = props.theme
    ? `${sheet.btn} ${sheet[props.theme]}`
    : sheet.btn;

  return (
    <button className={cls} onClick={(ev) => {
      ev.preventDefault();
      props.onClick();
    }}>
      {props.children}
    </button>
  );
}

export default BotaoAcao;
