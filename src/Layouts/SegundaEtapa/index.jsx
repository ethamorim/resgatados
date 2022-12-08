import Auth from 'Layouts/Auth';
import PataOutlineTitulo from "Components/PataOutlineTitulo";

function SegundaEtapa(props) {
  return (
    <Auth>
      <PataOutlineTitulo>{ props.titulo }</PataOutlineTitulo>

      { props.children }
    </Auth>
  );
}

export default SegundaEtapa;
