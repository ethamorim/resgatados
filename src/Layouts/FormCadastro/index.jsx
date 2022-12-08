import './style.scss';

function FormCadastro(props) {
  return (
    <form className="form-rsg-cdst">
      { props.children }
    </form>
  );
}

export default FormCadastro;
