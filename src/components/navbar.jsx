import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    let navObject = {
        counters: "Counters",
        calc: "Calculator",
        movies: "Movies",
        login: "Login",
        add_movie: "Add Movie",
        todo: "To do list",
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                { Object.keys(navObject).map((navItem,i) => (
                    <NavLink key={i} className="nav-item nav-link m-2" to={ `/${navItem}` }>
                        { navObject[navItem] }
                    </NavLink>
                )) }
            </div>
        </nav>
    );
};

export default Navbar;