import CardPet from "Components/CardPet";

import './style.scss';

function Home() {
  const dadosPets = [
    {
      id: 1,
      img: require('Assets/Images/pets/roger.png'),
      nome: 'Roger',
      idade: '12',
      divulgante: 'Patas Amadas'
    },
    {
      id: 2,
      img: require('Assets/Images/pets/donald.png'),
      nome: 'Donald',
      idade: '7',
      divulgante: 'ExoSalva ONG'
    },
    {
      id: 3,
      img: require('Assets/Images/pets/marta.png'),
      nome: 'Marta',
      idade: '5',
      divulgante: 'SalvemPets ONG'
    },
    {
      id: 4,
      img: require('Assets/Images/pets/ina.png'),
      nome: 'Ina',
      idade: '3',
      divulgante: 'Maria de Calheiros Carvalho'
    },
    {
      id: 5,
      img: require('Assets/Images/pets/kali.png'),
      nome: 'Kali Key',
      idade: '6',
      divulgante: 'Patas Amadas'
    },
    {
      id: 6,
      img: require('Assets/Images/pets/alfredo.png'),
      nome: 'Alfredo',
      idade: '2',
      divulgante: 'ExoSalva ONG'
    },
    {
      id: 7,
      img: require('Assets/Images/pets/davi.png'),
      nome: 'Davi',
      idade: '1',
      divulgante: 'Vanessa Andrade'
    },
    {
      id: 8,
      img: require('Assets/Images/pets/calma.png'),
      nome: 'Calma',
      idade: '2',
      divulgante: 'Patas Amadas'
    },
  ];

  const pets = dadosPets.map(el => {
    return (
      <CardPet key={el.id} pet={el} />
    );
  });

  return (
    <div className="screen screen-home">
      <main className="home">
        { pets }
      </main>
    </div>
  );
}

export default Home;
