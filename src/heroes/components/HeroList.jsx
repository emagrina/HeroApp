import React, { useMemo } from 'react';
import { HeroCard } from './index.js';
import { getHeroesByPublisher } from '../helpers/';

const HeroList = ({ publisher }) => {
    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher] );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
            {heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
            ))}
        </div>
    );
};

export default HeroList;
