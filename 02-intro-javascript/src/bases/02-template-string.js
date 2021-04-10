// Template Strings 
const nom = 'Claudio';
const ap = 'Sepulveda';

const nomCompleto = `Hola ${ nom } ${ ap } `;

console.log( nomCompleto );

function getsaludo(nom) {
  return 'Hola ' + nom
}

console.log(`Esto es un texto: ${ getsaludo( nom ) }`)