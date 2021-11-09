const baseURL = 'http://localhost:3000';

class API {
  static fetchCars = (success, failure) => {
    fetch(`${baseURL}/cars`)
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }

  static deleteCar = (id, success, failure) => {
    fetch(`${baseURL}/cars/${id}`, { method: 'DELETE' })
      .then(success)
      .catch(failure)
  }
}

// const rodytiKlaidą = (klaida) => console.error('Klaida:', klaida)

// console.log('Siunčiami pradiniai duomenys...');
// API.fetchCars(
//   (duomenys) => {
//     console.log('Gauti pradiniai duomenys', duomenys);
//     console.log('trinamas Elementas su id \'1\'...');
//     API.deleteCar(
//       '1',
//       (duomenys) => {
//         console.log('Sėkimgai ištrinta', duomenys);
//         console.log('Siunčiami atnaujinti duomenys...');
//         API.fetchCars(
//           (duomenys) => console.log('Gauti Atnaujinti duomenys', duomenys),
//           rodytiKlaidą
//         )
//       },
//       rodytiKlaidą
//     )
//   },
//   rodytiKlaidą
// )

