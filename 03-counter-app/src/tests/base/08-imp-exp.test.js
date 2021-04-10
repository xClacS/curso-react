import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    
    test('debe de retornar un héroe por id', () => {
        
        const id = 1;
        
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData );
    })

    test('debe de retornar un undefined si Héroe no existe', () => {
        
        const id = 10;
        
        const heroe = getHeroeById(id);

        expect( heroe ).toBe( heroe );
    })

    test('debe de retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';
        
        const heroe = getHeroesByOwner(owner);
        
        const heroeData = heroe.filter( h => h.owner === owner );

        expect( heroe ).toEqual( heroeData );
    })

    test('debe de retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel';
        
        const heroe = getHeroesByOwner(owner);
        
        const heroeData = heroe.filter( h => h.owner === owner );
        
        expect( heroe.length ).toBe( 2 );
    })
})
