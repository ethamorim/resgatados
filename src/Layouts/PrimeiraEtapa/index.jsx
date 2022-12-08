import Auth from 'Layouts/Auth';
import PataTitulo from 'Components/PataTitulo';

function PrimeiraEtapa(props) {
  return (
    <Auth>
      <PataTitulo>Faça seu cadastro</PataTitulo>

      { props.children }
    </Auth>
  );
}

export default PrimeiraEtapa;
