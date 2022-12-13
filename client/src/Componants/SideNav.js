import React from "react";
import "./SideNav.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'

const SideNav = () => {
    return(
        <div className="sideNav">  
            <ul className="nav_List">
            <li> 
                <FontAwesomeIcon icon={faDiagramProject} /> LOGO
                </li>
                <li> 
                <FontAwesomeIcon icon={faUpload} /> Upload Zip File
                </li>
                <li> 
                <FontAwesomeIcon icon={faDatabase} /> Show Variables
                </li>
                <i class="fa-solid fa-cabin"></i>

            </ul>
            
           

        </div>

    ) 


}

export default SideNav