import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/index.js';
import { HeroCard } from '../components/index.js';

const SearchPage = () => {

    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );
    const heroes = getHeroesByName( q );

    const showSearch = ( q.length === 0 );
    const showError = ( q.length > 0 && heroes.length === 0 );

    return (
        <>
            <h2 className="normal-case text-2xl non-italic mt-5 mx-10">Search results:</h2>

            <div className="alert alert-info shadow-lg my-5" style={ { display: showSearch ? '' : 'none' } }>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="stroke-current flex-shrink-0 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Enter the name of the superhero you want to search for.</span>
                </div>
            </div>

            <div className="alert alert-error shadow-lg my-5" style={ { display: showError ? '' : 'none' } }>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6"
                         fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Could not find any results with: { q }</span>
                </div>
            </div>

            <div className="mx-10 my-10">
                {
                    heroes.map( hero => (
                        <div key={ hero.id }>
                            <HeroCard { ...hero }/>
                            <div className="my-5"></div>
                        </div>
                    ) )
                }
            </div>
        </>
    );
};

export default SearchPage;
