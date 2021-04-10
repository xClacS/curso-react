// Objetos literales

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'NY',
    zip: 101000,
    lat: 14.01,
    lng: 34.89,
  },
};

// console.table( {persona} );


const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 )