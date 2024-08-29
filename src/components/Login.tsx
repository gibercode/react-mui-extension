import React, { useEffect, useState } from 'react';
import { Button, Typography, Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCountStore } from '../store/count';
import ReactDOM from 'react-dom';
import { Dashboard } from './Dashboard';
import { App } from './App';
import Frame, { FrameContextConsumer } from 'react-frame-component';

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

  const removeFloatingScreen = () => {
    chrome.runtime.sendMessage({ type: 'LOG', message: 'removeFloatingScreen' });

    const floatingScreen = document.getElementById('app');
    if (floatingScreen) {
      floatingScreen.remove();
    }
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
    <Box sx={{ p: 2 }}>
      <h1>My React Extension</h1>
      <TextField label='Type something' variant='outlined' value={text} onChange={handleChange} fullWidth />
      <Button
        id='insert-html'
        variant='contained'
        color='primary'
        sx={{ mt: 2 }}
        onClick={() => handleClick(insertHelloWorld)}>
        Insert HTML
      </Button>

      <Button id='insert-html' variant='contained' color='primary' sx={{ mt: 2 }} onClick={handleNavigate}>
        Submit
      </Button>

      <Button id='count' variant='contained' color='primary' sx={{ mt: 2 }} onClick={increaseCount}>
        Count
      </Button>
      <Typography>Count: {count}</Typography>

      <Button
        id='count'
        variant='contained'
        color='primary'
        sx={{ mt: 2 }}
        onClick={() => handleClick(insertSidePanelRight)}>
        insertar sidepanel right
      </Button>
      <Button
        id='count'
        variant='contained'
        color='primary'
        sx={{ mt: 2 }}
        onClick={() => handleClick(insertSidePanelLeft)}>
        insertar sidepanel left
      </Button>
      <Button id='count' variant='contained' color='primary' sx={{ mt: 2 }} onClick={injectApp}>
        inject react app
      </Button>
    </Box>
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
