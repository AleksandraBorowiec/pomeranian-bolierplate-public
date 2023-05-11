import './styles.css';

export const ArrayRendering = () => {
  const cars = [
    { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },
    { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },
    { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },
    { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
  ];

  return (
    <div>
      Auta:
      <br />
      {cars.map((car) => {
        return (
          <li key={car.id}>
            {car.make} {car.model} ({car.year}) - <b>{car.owner}</b>
          </li>
        );
      })}
    </div>
    // key musi mieć unikalna wartosc
  );
};
