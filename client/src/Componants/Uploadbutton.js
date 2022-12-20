import React from "react";
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'


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
                console.log(response);
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
                <label for="file-input" style={{ "display": "list-item" }} >
                    <li><FontAwesomeIcon icon={faUpload} /> Upload Zip File
                    </li>
                </label>
                <input id="file-input" style={{ "display": "none" }} type="file" value={this.state.value} onChange={this.handleChange}></input>
            </div>

        )


    };

}

export default Uploadbutton