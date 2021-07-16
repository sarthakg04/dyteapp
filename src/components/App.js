import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
//import PasteClient from "pastebin-api";
import axios from "axios";


function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
var hiddenElement = document.getElementById('test1');
hiddenElement.href = 'data:attachment/text,' + encodeURI([html]);
hiddenElement.target = '_blank';
hiddenElement.download = 'index.html';
var hiddenElement = document.getElementById('test2');
hiddenElement.href = 'data:attachment/text,' + encodeURI([css]);
hiddenElement.target = '_blank';
hiddenElement.download = 'index.css';
var hiddenElement = document.getElementById('test3');
hiddenElement.href = 'data:attachment/text,' + encodeURI([js]);
hiddenElement.target = '_blank';
hiddenElement.download = 'index.js';

async function testApi() {
  try {
    const b = await axios.post("https://pastebin.com/api/api_post.php",{
        params: {
          api_dev_key: 'bUm0HOkAqkrGXkC02O2IzDH_duV2TbuZ',
          api_paste_code:'test',
          api_option:'paste'
        }});
  } catch (error) {
    console.log(error);
  }
}

testApi();
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
      <select id="size_select">
        <option value="option1">HTML</option>
        <option value="option2">CSS</option>
        <option value="option3">JS</option>
      </select>
      <div id="option1" class="size_chart">
      <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
      </div>
      <div id="option2" class="size_chart">
      <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
      </div>
      <div id="option3" class="size_chart">
      <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      </div>
      <a id='test1'><button>Download HTML</button></a>
      <a id='test2'><button>Download CSS</button></a>
      <a id='test3'><button>Download JS</button></a>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}
export default App;
