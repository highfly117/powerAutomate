import React, { useState } from "react";
import TopBar from './Componants/TopBar';
import SideNav from './Componants/SideNav'
import SyntaxHighlighter from "react-syntax-highlighter"
import {a11yDark} from "react-syntax-highlighter/dist/esm/styles/hljs";
import './App.css';


function App() {

  const [code, setCode] = useState(`{
    "foo":true,
    "Bar":"yes",
    "how Much":9001
  }`)

  const updateCode = (newCode) => {
    console.log("code updated")

  }

  return (
    <div className="App">

      <SideNav updatecode={updateCode}></SideNav>
      <TopBar className="home_content"></TopBar>

      <div className="row Panels">
        <div className="col-6 jsonPanel">Flow JSON
          <SyntaxHighlighter children={code} showLineNumbers={true} id="jsonText" language="JSON" style={a11yDark}>

          </SyntaxHighlighter>
        </div>
        <div className="col-6 infopanel">
          details
        </div>
      </div>
    </div>
  );
}

export default App;
