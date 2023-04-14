import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute.jsx';
import PublicRoute from './PublicRoute.jsx';
import HomePage from '../home/pages/HomePage.jsx';
import LoginPage from '../auth/pages/LoginPage.jsx';
import { HeroesRoutes } from '../heroes/index.js';


const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="/" element={ <HomePage/> }/>

                <Route path='login/*' element={
                    <PublicRoute>
                        <Routes>
                            <Route path='/*' element={<LoginPage/>} />
                        </Routes>

                    </PublicRoute>
                }/>

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                }/>
            </Routes>
        </>
    );

};

export default AppRouter;