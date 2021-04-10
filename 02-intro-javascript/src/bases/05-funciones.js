// Funciones 
const saludar = function ( nombre ) {
  return `Hola, ${ nombre }`;
}

const saludar2 = nombre => `Hola, ${ nombre }`;

console.log( saludar('Goku') );
console.log( saludar2('Vegeta') );

const getUser = () => ({
  uid: 'ABC123',
  username: 'El_Papi1501'
});

const user = getUser();
console.log( user );

// Tarea

const getUsuarioActivo = nombre => ({
  uid: 'ABC567',
  username: nombre
});

const usuarioActivo = getUsuarioActivo('Claudio');
console.log( usuarioActivo );



// const usuarioActivo = nombre => ({
//   uid: 'ABC567',
//   username: nombre
// });

// console.log( usuarioActivo( 'Claudio' ) );