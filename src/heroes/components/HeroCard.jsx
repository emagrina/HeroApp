import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ( { id, superhero, publisher, alter_ego, first_appearance } ) => {
    const heroImageUrl = `./assets/heroes/${ id }-min.jpg`;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={ heroImageUrl } alt={ superhero } className="w-full h-64 object-cover animate__animated animate__fadeIn"/></figure>
            <div className="card-body">
                <h2 className="card-title">{ superhero }</h2>
                <p>{ alter_ego }</p>
                <span className="badge badge-accent badge-outline">{ first_appearance }</span>
                <span className="badge">{ publisher }</span>
                <div className="card-actions justify-end">
                    <Link to={ `/hero/${ id }` }>
                        <button className="btn bg-emerald-500 hover:bg-emerald-500/70">More...</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
