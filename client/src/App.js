import React from "react";
import Navbar from './Componants/Navbar';
import SideNav from './Componants/SideNav'
import './App.css';


function App() {
  return (
    <div className="App row">

      <SideNav></SideNav>

      <div className="row col" style={{"maxHeight": "75px","padding-right":"0px"}}>

        <div className="row" style={{"padding-right":"0px"}}>

          <Navbar></Navbar>

        </div>




        <div className="row info-container" >
          <div className="col-6 jsonPanel" >
            <pre id="account" className="json-container"></pre>
          </div>
          <div className="col-6 infopanel" ></div>
        </div>


      </div>



    </div>
  );
}

export default App;
