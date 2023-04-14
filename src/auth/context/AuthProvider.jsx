import React, { useReducer } from 'react';
import { AuthContext } from './AuthContext.jsx';
import { authReducer } from './authReducer.js';

import { types } from '../types/types.js';


const initialState = {
    logged: false,
};

const init = () => {
    const user = JSON.parse( localStorage.getItem( 'user' ) );

    return {
        logged: !!user,
        user: user,
    };
};

const AuthProvider = ( { children } ) => {

    const [state, dispatch] = useReducer( authReducer, initialState, init );

    const login = ( name = '' ) => {
        const user = {
            id: '213123',
            name: 'emagrina',
            email: 'test@test.dev',
            password: 'test123',
        };

        const action = {
            type: types.login,
            payload: user,
        };

        localStorage.setItem( 'user', JSON.stringify( user ) );

        dispatch( action );
    };

    const logout = () => {
        localStorage.removeItem( 'user' );
        const action = { type: types.logout };
        dispatch( action );
    };

    return (
        <AuthContext.Provider value={ {
            ...state,
            login,
            logout,
        } }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;