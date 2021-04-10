import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Prueba en 05-funciones', () => {
    
    test('getUser debe de retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );
    })

    test('getUsuarioActivo debe retornar un objeto ', () => {

        const nombre = 'Claudio';
        
        const user = getUsuarioActivo(nombre);

        expect( user ).toEqual( {
            uid: 'ABC567',
            username: nombre
        } );
    })
    
    
})

