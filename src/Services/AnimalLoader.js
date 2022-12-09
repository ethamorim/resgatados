import animals from 'Assets/Data/animals.json';

export default function getAnimals(id) {
  if (!id)
    return animals;
  else
    return animals.find(el => el.id === parseInt(id));
}
