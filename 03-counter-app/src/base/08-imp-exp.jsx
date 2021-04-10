import heroes from '../data/heroes';

heroes


export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );



// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );



