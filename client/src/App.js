import React from "react";
import Navbar from './Componants/Navbar';
import SideNav from './Componants/SideNav'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((data) => setData(data));
  }, []);



  return (
    <div className="App row">

      <SideNav></SideNav>

      <div className="row col-10">

        <div className="row">

          <Navbar></Navbar>

        </div>




        <div className="row"><div className="col" style={{ width: '100px', height: '100px', background: 'green', order: 2 }}>{data} 2</div>
          <div className="col" style={{ width: '100px', height: '100px', background: 'red', order: 2 }}>{data}</div>
        </div>

        
      </div>



    </div>
  );
}

export default App;
