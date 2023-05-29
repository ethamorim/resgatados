import { render, screen } from "@testing-library/react";
import Home from "Pages/Home";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useLoaderData: () => ([
    {
      "id": 1,
      "img": "roger.png",
      "nome": "Roger",
      "idade": "12",
      "tags": [],
      "descricao": "",
      "divulgador": {
        "nome": "Patas Amadas",
        "verificado": true,
        "descricao": "Somos uma ONG focada em resgatar animais por toda região de Maceió. Temos especialistas voluntários que dão os cuidados necessários para os pets, para que assim estejam saudáveis e prontos para adoção.",
        "endereco": "Av. Fernandes Lima, 512, Farol"
      }
    },
    {
      "id": 2,
      "img": "donald.png",
      "nome": "Donald",
      "idade": "7",
      "tags": [],
      "descricao": "",
      "divulgador": {
        "nome": "ExoSalva ONG",
        "verificado": true,
        "descricao": "",
        "endereco": ""
      }
    },
  ])
}));

jest.mock('../Services/UsuarioLoader', () => ({
  __esModule: true,
  ...(jest.requireActual('../Services/UsuarioLoader')),
  getUsuarioAtivo: () => ({
    "user": "deisantix",
    "senha": "ytalo123",
    "img": "deisantix.jpg",
    "nome": "Ytalo Amorim",
    "contribuinte": true,
    "dataNascimento": "2003-11-10",
    "idade": 19,
    "mora": "apartamento",
    "maisSobre": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "tipo": "A"
  })
}));

test('Deve renderizar cards de animais', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getAllByRole('card-pet')).toHaveLength(2);
});
