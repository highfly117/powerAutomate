import React, { useState, useEffect, useRef } from "react";
import Flow from './Componants/Flow'
import axios from 'axios'
import DataTable from 'datatables.net-dt'
import TopBar from './Componants/TopBar';
import SideNav from './Componants/SideNav'
import Graph from './Componants/Graph'
import WeatherTable from "./Componants/WeatherTable";

import './App.css';



function App() {

  const [data, setdata] = useState(null)
  const [timedata, settimedata] = useState([])
  const [weatherData, SetWeather] = useState(null)
 
 
  const tableName = "table1"

  useEffect(() => {

      const loadData = async () => { 
        try{
          const response = await axios.post("http://localhost:9000/getWeather")
          setdata(response.data)
          } catch(error) {
          console.log(error)
        };
      };

      loadData();

  }, [])


  return (
    <div className="App">

      <SideNav ></SideNav>
      <TopBar className="home_content"></TopBar>

      <div className="row Panels">
        <div className="col-8 jsonPanel" >
        {data ? (
        <Graph data={data} className="D3Graphs"></Graph>
      ) : (
        <p>Loading...</p>
      )} 
        </div>
        
        <div className="col-4 infopanel">
        {data ? (
        <WeatherTable data={data}></WeatherTable>
      ) : (
        <p>Loading...</p>
      )} 
          
        </div>
      </div>
    </div>
  );
}

export default App;
