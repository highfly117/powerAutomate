import React from "react";
import "./CSS/SideNav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject, faBars,faTerminal } from '@fortawesome/free-solid-svg-icons'
import Uploadbutton from "./Uploadbutton";
import {DiReact} from 'react-icons/di'
import {FaCodeBranch, FaSearch} from 'react-icons/fa'
import { BiMenu,BiUpload } from "react-icons/bi";
import { HiVariable } from "react-icons/hi";
import { RiOrganizationChart } from "react-icons/ri";
import { VscJson } from "react-icons/vsc";
import { IconContext } from "react-icons/lib";




const SideNav = () => {
    return (
        <div className="sideNav">

            <div className="logo_content">
                <div className="logo">
                    <div className="logo_name"><DiReact size={"4rem"}/>RnD</div>
                </div>
                <BiMenu className="react-icons" id="btn"></BiMenu>
            </div>
            <ul className="nav_list">
            <li>
                    <a href="#">
                       <FaSearch id="faSearch" className="react-icons" />
                        <input type={"text"} placeholder={"search...."}></input>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <HiVariable className="react-icons"  />
                        <span className="links_name">Variables</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <FaCodeBranch className="react-icons" />
                        <span className="links_name">Show Branches</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <RiOrganizationChart className="react-icons" />
                        <span className="links_name">Tree View</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <VscJson className="react-icons"  />
                        <span className="links_name">JSON</span>
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