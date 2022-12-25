import React from "react";
import "./CSS/Navbar.css";


const TopBar = () => {

    return (

        <div className="navbarRE">
            <nav class="navbar bg-light" style={{"flexWrap":"nowrap"}}>
                <a class="navbar-brand" style={{"marginLeft":"15px"}}>Automate Studio</a>
                <div class="container-fluid" style={{"justifyContent":"end"}}>
                    <form class="d-inline-flex" role="search" >
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>

    )

}

export default TopBar