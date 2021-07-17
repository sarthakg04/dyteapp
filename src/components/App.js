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
        <img class='imgnav' src='https://camo.githubusercontent.com/d852f3040a37e197b0cc6ed4a9750adb42d6c86d1c7c6a7de7443f4fce920a2a/68747470733a2f2f647974652d75706c6f6164732e73332e61702d736f7574682d312e616d617a6f6e6177732e636f6d2f647974652d6c6f676f2d6461726b2e737667'/>
      <p id='textnav'>Select language : &nbsp;&nbsp;&nbsp;</p>
      <select id="size_select" class='choice'>
        
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
      <hr/>
      <a id='test1'><button class='button button2'>Download HTML</button></a>
      <a id='test2'><button class='button button2'>Download CSS</button></a>
      <a id='test3'><button class='button button2'>Download JS</button></a>
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
