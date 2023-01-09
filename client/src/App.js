import React, { useState } from "react";
import TopBar from './Componants/TopBar';
import SideNav from './Componants/SideNav'
import Flow from './Componants/Flow'
import Editor from 'react-simple-code-editor';
import {highlight, languages} from 'prismjs'
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism-tomorrow.css';
import SyntaxHighlighter from "react-syntax-highlighter"
import {a11yDark} from "react-syntax-highlighter/dist/esm/styles/hljs";
import './App.css';
import './Componants/CSS/prismjshack.css'


function App() {

  const [code, setCode] = useState(`{
    "foo":true,
    "Bar":"yes",
    "how Much":9001
  }`)

  const updateCode = (newCode) => {
    console.log("code updated")
    //console.log(newCode)
    setCode(newCode)

  }

  return (
    <div className="App">

      <SideNav updateCode={updateCode}></SideNav>
      <TopBar className="home_content"></TopBar>

      <div className="row Panels">
        <div className="col-8 jsonPanel">Flow JSON
          {/* <SyntaxHighlighter children={code} showLineNumbers={true} id="jsonText" language="JSON" style={a11yDark}>

          </SyntaxHighlighter> */}

          <Editor preClassName={'language-json'}  id="jsonText" value={code} onValueChange={code => setCode(code)} highlight={code => highlight(code, languages.json, 'json')} padding={10} style={{fontFamily: '"Fira code", "Fira Mono", monospace'}}></Editor>
        </div>
        <div className="col-4 infopanel">
          details
          <Flow></Flow>
        </div>
      </div>
    </div>
  );
}

export default App;
