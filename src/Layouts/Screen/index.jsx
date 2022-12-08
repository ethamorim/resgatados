import sheet from './style.module.scss';

function Screen(props) {
  const cls = props.className
    ? `${sheet.screen} ${props.className}`
    : sheet.screen;

  return (
    <div className={cls}>
      { props.children }
    </div>
  );
}

export default Screen;
