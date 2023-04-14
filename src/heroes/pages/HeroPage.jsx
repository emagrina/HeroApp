import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/index.js';

const HeroPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const hero = useMemo( () => getHeroById( id ), [id] );

    const { superhero, publisher, alter_ego, first_appearance } = hero;

    const onNavigateBack = () => {
        navigate( -1 );
    };

    const heroImageUrl = `/assets/heroes/${ id }-min.jpg`;

    if ( !hero ) {
        return <Navigate to={ '/' }/>;
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={ heroImageUrl }
                         className="max-w-sm rounded-lg shadow-2xl  animate__animated animate__fadeIn" mx-10="true"/>
                    <div className="animate__animated animate__fadeIn">
                        <h1 className="text-5xl font-bold">{ superhero }</h1>
                        <p className="py-6">His real name is { alter_ego }, where we saw him appear for the first time
                            was in { first_appearance } and he is a character from { publisher }.</p>

                        <div className="card-actions justify-end">
                            <button
                                className="btn bg-emerald-500 hover:bg-emerald-500/70"
                                onClick={ onNavigateBack }
                            >
                                Previous page
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default HeroPage;