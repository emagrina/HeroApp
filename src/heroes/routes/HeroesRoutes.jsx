import React from 'react';
import { Navbar } from '../../ui/index.js';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../home/pages/HomePage.jsx';
import { HeroPage, DcPage, MarvelPage, SearchPage } from '../pages/index.js';

const HeroesRoutes = () => {
    return (
        <>
            <Navbar/>

            <Routes>
                <Route path="/marvel" element={ <MarvelPage/> } />
                <Route path="/dc" element={ <DcPage/> } />
                <Route path="/hero/:id" element={ <HeroPage/> } />
                <Route path="/search" element={ <SearchPage/> } />
            </Routes>
        </>
    );
};

export default HeroesRoutes;