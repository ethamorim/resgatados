import sheet from './style.module.scss';

function FormCadastro(props) {
  return (
    <form className={sheet.formResg}>
      { props.children }
    </form>
  );
}

export default FormCadastro;
