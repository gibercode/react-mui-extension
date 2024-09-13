import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCountStore } from '../store/count';

import { FolderComponent } from './Folder';

export const Login = () => {
  const { count, increaseCount } = useCountStore();
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleNavigate = () => {
    navigate('/dashboard');
  };

  //KNOW IF IS A CHROME EXTENSION OR INJECTED APP
  const isChromeExtension = () => {
    return typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined';
  };

  const handleClick = (position, handleFunction?) => {
    // KNOW IF IS A CHROME EXTENSION OR INJECTED APP
    if (isChromeExtension()) {
      chrome.tabs?.query({}, (tabs) => {
        const activeWeb = tabs?.find(({ url }) => url?.includes('https://www.amazon.com/'));
        if (!activeWeb) return;
        chrome.scripting.executeScript({
          target: { tabId: activeWeb?.id || 0 },
          func: handleFunction,
        });
      });
    } else {
      movePanel(position);
    }
  };

  const movePanel = (position) => {
    try {
      const reactRootDiv = document.getElementById('app');

      if (!reactRootDiv) {
        return null;
      }

      reactRootDiv.style.position = '';
      reactRootDiv.style.left = '';
      reactRootDiv.style.right = '';
      reactRootDiv.style.top = '';
      reactRootDiv.style.width = '';
      reactRootDiv.style.height = '';
      reactRootDiv.style.zIndex = '';
      reactRootDiv.style.backgroundColor = 'white';

      const currentParent = reactRootDiv.parentElement;
      const targetElement = document.getElementById('a-page');

      if (position === 'initial') {
        const apexDesktop = document.getElementById('apex_desktop');
        if (apexDesktop) {
          apexDesktop.appendChild(reactRootDiv);

          if (targetElement) {
            targetElement.style.paddingLeft = '0';
            targetElement.style.paddingRight = '0';
          }
        }
        return;
      }

      if (currentParent && currentParent.id === 'apex_desktop') {
        document.body.appendChild(reactRootDiv);
      }

      if (position === 'left') {
        reactRootDiv.style.position = 'fixed';
        reactRootDiv.style.left = '0';
        reactRootDiv.style.right = '';
      } else if (position === 'right') {
        reactRootDiv.style.position = 'fixed';
        reactRootDiv.style.right = '0';
        reactRootDiv.style.left = '';
      } else {
        return;
      }

      reactRootDiv.style.top = '0';
      reactRootDiv.style.width = '350px';
      reactRootDiv.style.height = '100vh';
      reactRootDiv.style.zIndex = '9999';

      if (targetElement) {
        targetElement.style.paddingLeft = '0';
        targetElement.style.paddingRight = '0';

        if (position === 'left') {
          targetElement.style.paddingLeft = '350px';
        } else if (position === 'right') {
          targetElement.style.paddingRight = '350px';
        }
      }
    } catch (error) {
      console.log(error);
    }
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
      const font = document.createElement('link');
      font.href = 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap';
      font.rel = 'stylesheet';
      document.head.appendChild(font);
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
      const font = document.createElement('link');
      font.href = 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap';
      font.rel = 'stylesheet';
      document.head.appendChild(font);
      document.head.appendChild(link);
      targetElement.appendChild(reactRootDiv);
      targetElement.appendChild(script);
    } catch (error) {
      console.log('error');
    }
  };

  const sendMessageToBackground = (message) => {
    window.postMessage({ type: 'FROM_REACT_APP', message }, '*');
  };

  const handleOpenPopup = () => {
    if (isChromeExtension()) return null;
    const reactRootDiv = document.getElementById('app');
    const targetElement = document.getElementById('a-page');
    reactRootDiv?.remove();
    if (targetElement) {
      targetElement.style.paddingLeft = '0';
      targetElement.style.paddingRight = '0';
    }

    sendMessageToBackground({ type: 'OPEN_POPUP' });
  };

  return (
    <div>
      <h1 className='text'>My React Extension</h1>
      {/* <input value={text} onChange={handleChange}>Type something'</input> */}

      <button id='insert-html' onClick={handleNavigate}>
        Submit
      </button>

      <button id='count' onClick={increaseCount}>
        Count
      </button>
      <p>Count: {count}</p>

      <button id='count' onClick={() => handleClick('right', insertSidePanelRight)}>
        insertar sidepanel right
      </button>
      <button id='count' onClick={() => handleClick('left', insertSidePanelLeft)}>
        insertar sidepanel left
      </button>
      <button id='count' onClick={() => handleClick('initial', injectReactApp)}>
        insertar en detalle
      </button>
      <button id='count' onClick={() => handleOpenPopup()}>
        popup
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
