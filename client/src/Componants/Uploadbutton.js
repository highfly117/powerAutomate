import React from "react";
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import appendflowData from "./Utils/AppendData.js"
import { BiUpload } from "react-icons/bi";

class Uploadbutton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipfile: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const data = new FormData()
        this.setState({
            zipfile: event.target.files[0],
            loaded: 0

        }, () => {
            data.append('file', this.state.zipfile)
            axios.post("http://localhost:9000/testAPI", data, {
                // receive two    parameter endpoint url ,form data
            }).then(function (response) {
                console.log(response.data);

                appendflowData(response.data)


            })
                .catch(function (error) {
                    console.log(error);
                })
        }
        )
    }
    render() {
        return (
            <div>
                <li>
                    <a href="#">
                        <label for="file-input" style={{ "display": "list-item" }} >
                            <BiUpload className="react-icons"></BiUpload>
                            <span className="links_name">Upload zip File</span>
                            <input id="file-input" style={{ "display": "none" }} type="file" value={this.state.value} onChange={this.handleChange}></input>

                        </label>
                    </a>
                    <span className="tooltips">Upload zip File</span>
                </li>
            </div>

        )


    };

}

export default Uploadbutton