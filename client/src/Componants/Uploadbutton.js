import React, { useEffect, useState } from "react";
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import appendflowData from "./Utils/AppendData.js"
import { BiUpload } from "react-icons/bi";

const Uploadbutton = (props) => {
    const [zipfile, setzipfile] = useState(null);
    const [inputValue, setInputValue] = useState('')
    const data = new FormData()
    useEffect(

        () => {
            data.append('file', zipfile)
            axios.post("http://localhost:9000/testAPI", data, {
                // receive two    parameter endpoint url ,form data
            }).then(function (response) {
                console.log(response.data);

                //appendflowData(response.data)

                props.updateCode()


            })
                .catch(function (error) {
                    console.log(error);
                })
        },[inputValue]
        )

    

    return (
        <div>
            <li>
                <a href="#">
                    <label for="file-input" style={{ "display": "list-item" }} >
                        <BiUpload className="react-icons"></BiUpload>
                        <span className="links_name">Upload zip File</span>
                        <input id="file-input" style={{ "display": "none" }} value={inputValue} type="file" onChange={(e) => {

                            setInputValue(e.target.value)

                            

                            setzipfile(e.target.files[0])



                        }}></input>
                    </label>
                </a>
                <span className="tooltips">Upload zip File</span>
            </li>
        </div>

    )

};



export default Uploadbutton