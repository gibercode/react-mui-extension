import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCountStore } from '../store/count';
import ReactDOM from 'react-dom';
import { FolderComponent } from './Folder';

export const Login = () => {
  const { count, increaseCount } = useCountStore();
  const navigate = useNavigate();
  const [text, setText] = useState('');

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
    try {
      chrome.runtime.sendMessage({ type: 'CLOSE_POPUP' });
      const reactAppUrl = chrome.runtime.getURL('dist/popup.js');
      const script = document.createElement('script');
      script.src = reactAppUrl;
      const targetElement = document.getElementById('a-page');

      if (!targetElement) return;

      const reactRootDiv = document.createElement('div');
      reactRootDiv.id = 'app';
      reactRootDiv.style.position = 'fixed';
      reactRootDiv.style.top = '0';
      reactRootDiv.style.right = '0';
      reactRootDiv.style.width = '350px';
      reactRootDiv.style.height = '100vh';
      reactRootDiv.style.backgroundColor = 'white';
      targetElement.style.paddingRight = '350px';
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = chrome.runtime.getURL('dist/popup.css');
      // const font = document.createElement('link');
      // font.href = '  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"';
      // font.rel = 'stylesheet';
      // document.head.appendChild(font);
      document.head.appendChild(link);

      targetElement.appendChild(reactRootDiv);
      targetElement.appendChild(script);
    } catch (error) {
      console.log('error');
    }
  };

  const insertSidePanelLeft = () => {
    try {
      chrome.runtime.sendMessage({ type: 'CLOSE_POPUP' });
      const reactAppUrl = chrome.runtime.getURL('dist/popup.js');
      const script = document.createElement('script');
      script.src = reactAppUrl;
      const targetElement = document.getElementById('a-page');

      if (!targetElement) return;

      const reactRootDiv = document.createElement('div');
      reactRootDiv.id = 'app';
      reactRootDiv.style.position = 'fixed';
      reactRootDiv.style.top = '0';
      reactRootDiv.style.left = '0';
      reactRootDiv.style.width = '350px';
      reactRootDiv.style.height = '100vh';
      reactRootDiv.style.backgroundColor = 'white';
      targetElement.style.paddingLeft = '350px';
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = chrome.runtime.getURL('dist/popup.css');
      document.head.appendChild(link);
      targetElement.appendChild(reactRootDiv);
      targetElement.appendChild(script);
    } catch (error) {
      console.log('error');
    }
  };

  const injectReactApp = () => {
    try {
      chrome.runtime.sendMessage({ type: 'CLOSE_POPUP' });
      const reactAppUrl = chrome.runtime.getURL('dist/popup.js');
      const script = document.createElement('script');
      script.src = reactAppUrl;
      const targetElement = document.getElementById('apex_desktop');
      if (!targetElement) return;
      const reactRootDiv = document.createElement('div');
      reactRootDiv.id = 'app';
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = chrome.runtime.getURL('dist/popup.css');
      document.head.appendChild(link);
      targetElement.appendChild(reactRootDiv);
      targetElement.appendChild(script);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <div>
      <h1 className='text'>My React Extension</h1>
      {/* <input value={text} onChange={handleChange}>Type something'</input> */}
      <button id='insert-html' onClick={() => handleClick(insertHelloWorld)}>
        Insert HTML
      </button>

      <button id='insert-html' onClick={handleNavigate}>
        Submit
      </button>

      <button id='count' onClick={increaseCount}>
        Count
      </button>
      <p>Count: {count}</p>

      <button id='count' onClick={() => handleClick(insertSidePanelRight)}>
        insertar sidepanel right
      </button>
      <button id='count' onClick={() => handleClick(insertSidePanelLeft)}>
        insertar sidepanel left
      </button>
      <button id='count' onClick={() => handleClick(injectReactApp)}>
        inject react app
      </button>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: 100 }}>
          <FolderComponent text='Elegible' borderColor='#40B73B' backgroundColor='#EAFFE8'>
            <p style={{ color: '#40B73B', padding: 0, margin: 0, fontSize: '0.75rem', fontWeight: '600' }}>Yes</p>
          </FolderComponent>
        </div>
        <div style={{ width: 100 }}>
          <FolderComponent text='Elegible' borderColor='#40B73B' backgroundColor='#EAFFE8'>
            <p style={{ color: '#40B73B', padding: 0, margin: 0, fontSize: '0.75rem', fontWeight: '600' }}>Yes</p>
          </FolderComponent>
        </div>
        <div style={{ width: 100 }}>
          <FolderComponent text='Elegible' borderColor='#40B73B' backgroundColor='#EAFFE8'>
            <p style={{ color: '#40B73B', padding: 0, margin: 0, fontSize: '0.75rem', fontWeight: '600' }}>Yes</p>
          </FolderComponent>
        </div>
        <div style={{ width: 100 }}>
          <FolderComponent text='Elegible' borderColor='#40B73B' backgroundColor='#EAFFE8'>
            <p style={{ color: '#40B73B', padding: 0, margin: 0, fontSize: '0.75rem', fontWeight: '600' }}>Yes</p>
          </FolderComponent>
        </div>
      </div>
    </div>
  );
};
