import React from "react";
import Navbar from './Componants/Navbar';
import SideNav from './Componants/SideNav'
import './App.css';
import bootstrap from 'bootstrap'

function App() {
  return (
    <div className="App">

      <SideNav></SideNav>


      <Navbar></Navbar>

      <div className="row info-container" >
        <div className="col-6 jsonPanel" >
          <pre id="account" className="json-container"></pre>
        </div>
        <div className="col-6 infopanel" ></div>
      </div>





    </div>
  );
}

export default App;
