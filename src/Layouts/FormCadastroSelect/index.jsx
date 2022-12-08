import sheet from './style.module.scss';

function FormCadastroSelect(props) {
  return (
    <form className={sheet.formResgCadastro}>
      { props.children }
    </form>
  );
}

export default FormCadastroSelect;
