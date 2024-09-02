import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useCountStore } from '../store/count';
import ReactDOM from 'react-dom';

export const Login = () => {
  const { count, increaseCount } = useCountStore();
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleNavigate = () => {

    
    navigate('/dashboard');
  };

  const handleClick = (handleFunction) => {
    chrome.tabs.query({}, (tabs) => {
      const activeWeb = tabs?.find(({ url }) => url?.includes('https://www.amazon.com/'));
      if (!activeWeb) return;
      chrome.scripting.executeScript({
        target: { tabId: activeWeb?.id || 0 },
        func: handleFunction,
      });
    });
  };

 

  const insertHelloWorld = () => {
    const element: any = document.getElementById('apex_desktop');
    const helloWorldDiv = document.createElement('div');
    helloWorldDiv.innerText = '¡Hola, mundo!';
    helloWorldDiv.style.fontSize = '24px';
    helloWorldDiv.style.color = 'blue';
    helloWorldDiv.style.textAlign = 'center';
    helloWorldDiv.style.marginTop = '20px';
    element.innerHTML = '<h1>hello world!</h1>';
    document.body.appendChild(helloWorldDiv);
  };

  const insertSidePanelRight = () => {
    // removeFloatingScreen();

    const element: any = document.getElementById('a-page');
    const appContainer = document.createElement('div');

    appContainer.id = 'side-panel';

    appContainer.style.position = 'fixed';
    appContainer.style.top = '0';
    appContainer.style.right = '0';
    appContainer.style.width = '350px';
    appContainer.style.height = '100vh';
    appContainer.style.backgroundColor = 'white';
    element.style.paddingRight = '350px';

    chrome.runtime.sendMessage({ type: 'LOG', message: 'test log' });

    // Inserta el contenedor en el elemento específico de Amazon
    document.body.appendChild(appContainer);

    console.log(appContainer);
    const root = ReactDOM.createRoot(appContainer);

    root.render(<Main />);
    // ReactDOM.render(<Main />, appContainer);
  };

  const insertSidePanelLeft = () => {
    const element: any = document.getElementById('a-page');
    const appContainer = document.createElement('div');
    appContainer.id = 'side-panel';
    appContainer.style.position = 'fixed';
    appContainer.style.top = '0';
    appContainer.style.left = '0';
    appContainer.style.width = '350px';
    appContainer.style.height = '100vh';
    appContainer.style.backgroundColor = 'white';
    element.style.paddingLeft = '350px';
  };

  const injectReactApp = () => {
    try {
      const reactAppUrl = chrome.runtime.getURL('dist/popup.js');
      const script = document.createElement('script');
      script.src = reactAppUrl;
      const targetElement = document.getElementById('apex_desktop');
      if (!targetElement) return;
      const reactRootDiv = document.createElement('div');
      reactRootDiv.id = 'app';
      targetElement.appendChild(reactRootDiv);
      targetElement.appendChild(script);
    } catch (error) {
      console.log('error');
    }
  };

  const injectApp = () => {
    chrome.tabs.query({}, (tabs: any) => {
      const activeWeb = tabs?.find(({ url }) => url?.includes('https://www.amazon.com/'));
      if (!activeWeb) return;

      chrome.scripting.executeScript({
        target: { tabId: activeWeb?.id || 0 },
        func: injectReactApp,
      });
    });
  };

  return (
    <div>
      <h1>My React Extension</h1>
      {/* <input value={text} onChange={handleChange}>Type something'</input> */}
      <button
        id='insert-html'
       
       
        onClick={() => handleClick(insertHelloWorld)}>
        Insert HTML
      </button>

      <button id='insert-html'  onClick={handleNavigate}>
        Submit
      </button>

       <button id='count'  onClick={increaseCount}>
        Count
        </button>
      <p>Count: {count}</p>

      <button
        id='count'
       
        onClick={() => handleClick(insertSidePanelRight)}>
        insertar sidepanel right
      </button>
      <button
        id='count'
      
        onClick={() => handleClick(insertSidePanelLeft)}>
        insertar sidepanel left
      </button>
      <button id='count'  onClick={injectApp}>
        inject react app
      </button>
    </div>
  );
};

const Main = () => {
  return (
    // <Frame>
    <p>Hello, world!</p>
    //  <FrameContextConsumer>
    //       {() => {
    //         return (
    //           <div>
    //             <p style={{ fontSize: '24px', color: 'blue', textAlign: 'center', marginTop: '20px' }}>Hello, world!</p>
    //           </div>
    //         );
    //       }}
    //     </FrameContextConsumer> */
    //    </Frame>
  );
};
