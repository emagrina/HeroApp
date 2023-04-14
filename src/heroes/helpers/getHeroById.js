import { heroes } from '../data/heroes.js';

export const getHeroById = ( id ) => {
    return heroes.find(hero => hero.id === id)
}