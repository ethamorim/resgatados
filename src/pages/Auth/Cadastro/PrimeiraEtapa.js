import AuthScreen from "../AuthScreen";
import PataTitulo from "../../../components/PataTitulo";

function PrimeiraEtapa(props) {
  return (
    <AuthScreen>
      <PataTitulo>Faça seu cadastro</PataTitulo>

      { props.children }
    </AuthScreen>
  );
}

export default PrimeiraEtapa;
