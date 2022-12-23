import React from "react";
import TopBar from './Componants/TopBar';
import SideNav from './Componants/SideNav'
import './App.css';




function App() {
  return (
    <div className="App">

      <SideNav></SideNav>
      <div className="home_content">
        <div className="text">Home Content</div>
      </div>

      

      {/* <div className="row info-container" >
        <div className="col-6 jsonPanel" >
          <pre id="account" className="json-container"></pre>
        </div>
        <div className="col-6 infopanel" ></div>
      </div> */}





    </div>
  );
}

export default App;
