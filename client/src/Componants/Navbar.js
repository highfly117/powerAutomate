import React from "react";
import "./CSS/Navbar.css";
import bootstrap from 'bootstrap' 

const Navbar = () => {

    return (

        <div className="navbarRE">
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>

        </div>

    )

}

export default Navbar