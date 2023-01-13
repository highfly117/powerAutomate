import React, { useEffect, useState } from "react";
import axios from 'axios'
import { BiUpload } from "react-icons/bi";

const Uploadbutton = (props) => {
    const [zipfile, setzipfile] = useState(null);


    const data = new FormData()

    const sendData = () => {

        if (zipfile == null) {

        } else {
            data.append('file', zipfile)
            axios.post("http://localhost:9000/testAPI", data, {
            }).then(function (response) {
                
                props.updateCode(JSON.stringify(response.data,undefined,4))
            })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
    const handleChange = (e) => {
        setzipfile(e.target.files[0])
    }

    useEffect(() => {
        sendData();
    })


    return (
        <div>
            <li>
                <a href="#">
                    <label htmlFor="file-input" style={{ "display": "list-item" }} >
                        <BiUpload className="react-icons"></BiUpload>
                        <span className="links_name">Upload zip File</span>
                        <input id="file-input" style={{ "display": "none" }} type="file" onChange={handleChange}></input>
                    </label>
                </a>
                <span className="tooltips">Upload zip File</span>
            </li>
        </div>

    )

};



export default Uploadbutton