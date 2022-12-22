import React from "react";
import "./CSS/SideNav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faDiagramProject, faBars } from '@fortawesome/free-solid-svg-icons'
import Uploadbutton from "./Uploadbutton";




const SideNav = () => {
    return (
        <div className="sideNav">

            <div className="logo_content">
                <div className="logo">
                    <FontAwesomeIcon className="logo" icon={faDiagramProject} />
                    <div className="logo_name">CodingLab</div>
                </div>
                <FontAwesomeIcon style={{ "color": "white" }} id="bt" icon={faBars} />
            </div>
            <ul className="nav_List">
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={faAddressBook} />
                    </a>
                </li>

            </ul>






            {/* <FontAwesomeIcon className="logo" icon={faDiagramProject} /> LOGO
            <ul className="nav_List">
                <li>
                    
                </li>
                <Uploadbutton></Uploadbutton>
                <li>
                    <FontAwesomeIcon icon={faDatabase} /> Show Variables
                </li>
                <i class="fa-solid fa-cabin"></i>

            </ul> */}
        </div>

    )
};




export default SideNav