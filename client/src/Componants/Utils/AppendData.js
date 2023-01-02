import $ from "jquery"



const appendflowData = (data) => {

    alert("file uploaded ")

    $(".language-JSON").prepend(JSON.stringify(data,undefined,4))

}




export default appendflowData