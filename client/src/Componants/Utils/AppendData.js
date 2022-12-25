import $ from "jquery"



const appendflowData = (data) =>{

    alert("file uploaded ")

    $("#jsonText").append('<p>'+ JSON.stringify(data) +'</p>')

    console.log(data)
    console.log(JSON.stringify(data))
    


}

export default appendflowData