import PrimeiraEtapa from "Layouts/PrimeiraEtapa";
import FormCadastroSelect from "Layouts/FormCadastroSelect";
import BotaoLink from "Components/Botao/BotaoLink";

import { useSelector, useDispatch } from "react-redux";
import { setObjetivo } from "Features/Cadastro/cadastroSlice";

function Objetivo() {
  const objetivo = useSelector((state) => state.cadastro.objetivo);

  const dispatch = useDispatch();

  const opcoes = [
    {
      label: 'Adotar',
      value: 'A'
    },
    {
      label: 'Divulgar',
      value: 'D'
    }
  ];

  const proximoForm = (objetivo === 'A')
    ? '/cadastrar/pessoa/fisica'
    : '/cadastrar/pessoa';

  return (
    <PrimeiraEtapa>
        <FormCadastroSelect>
          <label htmlFor="objetivo">Qual seu objetivo?</label>
          <select
            id="objetivo"
            name="objetivo"
            value={objetivo}
            onChange={(ev) => dispatch(setObjetivo(ev.target.value))}>
            {opcoes.map(el => (
              <option value={el.value} key={el.value} >{el.label}</option>
            ))}
          </select>

          <BotaoLink to={proximoForm} theme="light">Próximo</BotaoLink>
        </FormCadastroSelect>
    </PrimeiraEtapa>
  );
}

export default Objetivo;
