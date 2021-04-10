// Destructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { edad, nombre:nombre2, clave } = persona;

// console.log( nombre2 );
// console.log( edad );
// console.log( clave );

const useContext = ( { nombre, edad, rango = 'Capitan' } ) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.001,
            lng: -12.321
        }
    }
}

const { nombreClave, anios, latlng:{lat, lng} } = useContext( persona );

 

console.log(nombreClave, anios);
console.log(lat, lng);