import React from 'react';
import { HeroList } from '../';

const DcPage = () => {
    return (
        <>
            <h2 className='normal-case text-2xl non-italic mt-5 mx-10'>DC Comics</h2>
            <HeroList publisher='DC Comics'/>
        </>
    );
};

export default DcPage;