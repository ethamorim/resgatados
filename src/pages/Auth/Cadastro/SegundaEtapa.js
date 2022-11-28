import AuthScreen from "../AuthScreen";
import PataOutlineTitulo from "../../../components/PataOutlineTitulo";

function SegundaEtapa(props) {
  return (
    <AuthScreen>
      <PataOutlineTitulo>{ props.titulo }</PataOutlineTitulo>

      { props.children }
    </AuthScreen>
  );
}

export default SegundaEtapa;
