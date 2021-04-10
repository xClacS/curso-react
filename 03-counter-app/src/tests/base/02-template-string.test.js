import { getSaludo } from '../../base/02-template-string';

describe('Prueba en 02-template-strings.js', () => {

    test('getSaludo debe retornar Hola Claudio', () => {
        
        const nombre = 'Claudio';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre );
    })
    
    test('getSaludo debe retornar Hola Carlos, si no hay argumento', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos' );
    })

})