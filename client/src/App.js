import React from "react";
import Navbar from './Componants/Navbar';
import SideNav from './Componants/SideNav'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  



  return (
    <div className="App row">

      <SideNav></SideNav>

      <div className="row col" style={{"maxHeight": "75px","padding-right":"0px"}}>

        <div className="row" style={{"padding-right":"0px"}}>

          <Navbar></Navbar>

        </div>




        <div className="row">
          <div className="col jsonPanel" ></div>
          <div className="col infopanel" ></div>
        </div>


      </div>



    </div>
  );
}

export default App;
