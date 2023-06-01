import React, { useEffect, useState } from "react";
import axios from 'axios'
import { BiUpload } from "react-icons/bi";

const Uploadbutton = (props) => {

    const sendData = () => {

       
        axios.post("http://localhost:9000/testAPI", {
        }).then(function (response) {

            
            
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div onClick={sendData}>
            <li>
                <a href="#">
                    <label htmlFor="file-input" style={{ "display": "list-item" }} >
                        <BiUpload className="react-icons"></BiUpload>
                        <span className="links_name">Upload zip File</span>
                    </label>
                </a>
                <span className="tooltips">Upload zip File</span>
            </li>
        </div>

    )

};





export default Uploadbutton