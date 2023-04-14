import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/assets/peakpx.jpg")` }}>
            <div className="hero-overlay bg-opacity-80"></div>

            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">HeroApp<span className="text-emerald-400/100">!</span></h1>
                    <p className="py-6">Discover the universe of DC and Marvel superheroes in one place! On this
                        consultation platform for true comic book fans. Dive into the exciting world of superheroes
                        now!</p>
                    <Link to={ '/login' }>
                        <button className="btn  bg-emerald-400/100 hover:bg-emerald-400/70">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
