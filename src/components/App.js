import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import space from '../components/spaceship.png'
function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  //const[python,setPy]=useLocalStorage('python')
  const [srcDoc, setSrcDoc] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <head>
      <title>
      </title>
      </head>
      <script>
      function fill(){
       document.body.style.backgroundImage = "url(${space})";
      };
      text1='hello';
      </script>
      <script>
          function printer(text1){
            fill();
            document.getElementById("demo").innerHTML = text1;
          }
          </script>
      <body>
   
          <p id="demo">cute</p>
          <script>${js}</script>    
      </body>
      </html>
      `)
var hiddenElement = document.getElementById('test1');
hiddenElement.href = 'data:attachment/text,' + encodeURI([html]);
hiddenElement.target = '_blank';
hiddenElement.download = 'index.html';

    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, js])
  return (
    <>
    <div class="root">
      <div className="top-pane">
      <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      <div class="mobcontainer">
      <section id="mobilescreen">
      <div id="speaker"></div>
      <section id="maincontainer">
      
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      
      </section>
      <div id="controlder"></div>
      </section> 
      </div>
</div>
</div>
<a id='test1'><button class='button button2'>Download HTML</button></a>
    </>
  )
}
export default App;
