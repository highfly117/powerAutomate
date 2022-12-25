import React from "react";
import TopBar from './Componants/TopBar';
import SideNav from './Componants/SideNav'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.css';

function App() {

  
  return (
    <div className="App">

      <SideNav></SideNav>
      <TopBar className="home_content"></TopBar>

      <div className="Panels">
        <div className="jsonPanel">
        <SyntaxHighlighter id="jsonText" language="JSON" style={docco}>


      
        </SyntaxHighlighter>
        </div>
        <div className="infopanel">
          details
        </div>
      </div>
    </div>
  );
}

export default App;
