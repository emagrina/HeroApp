import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HeroSearch } from '../../heroes/index.js';
import { AuthContext } from '../../auth/index.js';

const Navbar = () => {

    const { user, logout } = useContext( AuthContext );

    const navigate = useNavigate();

    const onLogout = () => {
        navigate( '/', {
            replace: true,
        } );
        logout();
    };
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={ 0 } className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex={ 0 }
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink
                                className={ ( { isActive } ) => `${ isActive ? 'active' : 'hover:bg-emerald-400/70' }` }
                                to="/marvel">
                                Marvel
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={ ( { isActive } ) => `${ isActive ? 'active' : 'hover:bg-emerald-400/70' }` }
                                to="/dc">
                                DC
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link
                    className="btn btn-ghost normal-case text-xl"
                    to={ '/marvel' }>
                    HeroApp<span className="text-emerald-400/100">!</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink
                            className={ ( { isActive } ) => `${ isActive ? 'active' : 'hover:bg-emerald-400/70' }` }
                            to="/marvel">
                            Marvel
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={ ( { isActive } ) => `${ isActive ? 'active' : 'hover:bg-emerald-400/70' }` }
                            to="/dc">
                            DC
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <HeroSearch/>
                <div className="tooltip tooltip-bottom" data-tip={user?.name}>
                    <a
                        className="btn"
                        onClick={ onLogout }
                    >Logout</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;