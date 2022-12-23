import React from "react";
import "./CSS/Navbar.css";


const TopBar = () => {

    return (

        <div className="navbarRE">
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>

    )

}

export default TopBar