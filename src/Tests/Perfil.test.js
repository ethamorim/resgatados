import { render, screen } from '@testing-library/react';
import Perfil from 'Pages/Perfil/Perfil'
import { MemoryRouter } from 'react-router-dom';

jest.mock('../Services/UsuarioLoader', () => ({
  __esModule: true,
  ...(jest.requireActual('../Services/UsuarioLoader')),
  getUsuarioAtivo: () => ({
    "user": "patamada",
    "senha": "amogatinhos123",
    "nome": "Patas Amadas",
    "email": "patamada@gmail.com",
    "endereco": "Fernandes Lima",
    "tipo": "D"
  })
}));

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useLoaderData: () => ({
    "user": "patamada",
    "senha": "amogatinhos123",
    "nome": "Patas Amadas",
    "email": "patamada@gmail.com",
    "endereco": "Fernandes Lima",
    "tipo": "D"
  })
}))

test('Deve renderizar botão de divulgar novo animal', () => {
  render(
    <MemoryRouter initialEntries={['/perfil/patamada']}>
      <Perfil />
    </MemoryRouter>
  )

  expect(screen.getByRole('divulgar-novo')).toBeVisible();
});

test('Deve ter Tab de Divulgados', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Perfil />
    </MemoryRouter>
  )

  const tabs = await screen.findAllByRole('tab');
  tabs.forEach((el, i) => {
    if (i === 0)
      expect(el).toHaveTextContent('Divulgados');
  });
});

test('Deve não ter Tab de Adotados', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Perfil />
    </MemoryRouter>
  )

  const tabs = await screen.findAllByRole('tab');
  tabs.forEach((el, i) => {
    if (i === 0)
      expect(el).not.toHaveTextContent('Adotados');
  });
})
