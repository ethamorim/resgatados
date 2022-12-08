import './style.scss';

function Screen(props) {
  const cls = props.className
    ? 'screen ' + props.className
    : 'screen';

  return (
    <div className={cls}>
      { props.children }
    </div>
  );
}

export default Screen;
