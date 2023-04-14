import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm.js';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/index.js';

const HeroSearch = () => {
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );

    const navigate = useNavigate();

    const [showInput, setShowInput] = useState( false );

    const handleClick = () => {
        setShowInput( true );
    };

    const { searchText, onInputChange } = useForm( {
        searchText: q,
    } );

    const onSearchSubmit = ( event ) => {
        event.preventDefault();
        if ( searchText.trim().length <= 1 ) return;
        navigate( `/search?q=${ searchText.toLowerCase().trim() }` );
    };

    return (
        <div>
            { !showInput ? (
                <button
                    className="btn btn-ghost btn-circle"
                    onClick={ handleClick }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </button>
            ) : (
                <div className="form-control mx-5">
                    <form onSubmit={ onSearchSubmit } aria-label="form">
                        <input
                            type="text"
                            placeholder="Search a hero..."
                            className="input input-bordered"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ onInputChange }
                        />
                    </form>
                </div>
            ) }
        </div>
    );
};

export default HeroSearch;
