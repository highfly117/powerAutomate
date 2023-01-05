import React from "react";
import "./CSS/Navbar.css";


const TopBar = () => {

    return (

        <div className="navbarRE">
            <nav className="navbar bg-light" style={{"flexWrap":"nowrap"}}>
                <a className="navbar-brand" style={{"marginLeft":"15px"}}>Automate Studio</a>
                <div className="container-fluid" style={{"justifyContent":"end"}}>
                    <form className="d-inline-flex" role="search" >
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>

    )

}

export default TopBar