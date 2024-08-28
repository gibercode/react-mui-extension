import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useCountStore } from '../store/count';
import { Typography } from '@mui/material';
import ReactDOM from 'react-dom';
import { Dashboard } from './Dashboard';
import { App } from './App';

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

    // Inserta el contenedor en el body de la página

    // Inserta el contenedor en el elemento específico de Amazon
    element.appendChild(appContainer);

    // Renderiza la aplicación en el contenedor
    // ReactDOM.render(<Dashboard />, appContainer);
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

    // Inserta el contenedor en el body de la página

    // Inserta el contenedor en el elemento específico de Amazon
    element.appendChild(appContainer);

    // Renderiza la aplicación en el contenedor
    // ReactDOM.render(<Dashboard />, appContainer);
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
    </Box>
  );
};
