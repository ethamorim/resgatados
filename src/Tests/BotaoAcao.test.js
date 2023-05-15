import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BotaoAcao from "Components/Botao/BotaoAcao";

test('Deve ter o título certo', () => {
  render(<BotaoAcao>Entrar</BotaoAcao>);

  const botao = screen.getByRole('button');
  expect(botao).toHaveTextContent('Entrar');
});

test('Deve executar uma função e abrir um alert', async () => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});

  render(
    <BotaoAcao onClick={() => {
      window.alert('Sucesso!');
    }}>
      Abrir alert
    </BotaoAcao>
  );

  const botao = await screen.findByRole('button');
  userEvent.click(botao);

  expect(window.alert).toBeCalled();
});
