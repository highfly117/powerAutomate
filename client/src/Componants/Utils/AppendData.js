import $ from "jquery"
import { prettyPrintJson } from 'pretty-print-json';



const appendflowData = (data) =>{

    alert("file uploaded ")

    const elem = document.getElementById('account')

    elem.innerHTML = prettyPrintJson.toHtml(data)
    


}

export default appendflowData