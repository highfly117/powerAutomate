import React from "react";
import "./SideNav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'




class SideNav extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      
    }
  
    handleChange(event) {
        console.log(event);
        event.preventDefault();
    }
  
    
    
   
    
    render(){
    return (
        <div className="sideNav col-1">
            <ul className="nav_List">
                <li>
                    <FontAwesomeIcon icon={faDiagramProject} /> LOGO
                </li>
                <label for="file-input"  style={{"display":"list-item"}} >
                    <li><FontAwesomeIcon icon={faUpload} /> Upload Zip File
                    </li> 
                </label>
                <input id="file-input"  style={{"display": "none"}} type="file" value={this.state.value} onChange={this.handleChange}></input>
                <li>
                    <FontAwesomeIcon icon={faDatabase} /> Show Variables
                </li>
                <i class="fa-solid fa-cabin"></i>

            </ul>
        </div>
    
    )
    };
    

}

export default SideNav