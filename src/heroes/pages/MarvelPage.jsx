import React from 'react';
import { HeroList } from '../';


const MarvelPage = () => {
    return (
        <>
            <h2 className='normal-case text-2xl non-italic mt-5 mx-10'>Marvel Comics</h2>
            <HeroList publisher='Marvel Comics'/>
        </>
    );
};

export default MarvelPage;