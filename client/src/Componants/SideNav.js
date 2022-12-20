import React from "react";
import "./CSS/SideNav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'
import Uploadbutton from "./Uploadbutton";




const SideNav = () => {
    return (
        <div className="sideNav col-1">
            <ul className="nav_List">
                <li>
                    <FontAwesomeIcon icon={faDiagramProject} /> LOGO
                </li>
                <Uploadbutton></Uploadbutton>
                <li>
                    <FontAwesomeIcon icon={faDatabase} /> Show Variables
                </li>
                <i class="fa-solid fa-cabin"></i>

            </ul>
        </div>

    )
};




export default SideNav