import React, { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './styles.module.scss';

import { useCountStore } from '../../store/count';
import Accordion from '../Accordion';
import { Icon } from '@iconify/react';
import { Product } from './Elements/Product';
import { Settings } from './Elements/Settings';
import { Essential } from './Elements/Essential';
import { Advanced } from './Elements/Advanced';
import { Fees } from './Elements/Fees';
import { Offers } from './Elements/Offers';
import { Alerts } from './Elements/Alerts';
import { Logo } from '../Logo';
import { useFontSizeStore } from '../../store/resource';

export const Dashboard = () => {
  const { count, increaseCount } = useCountStore();
  const navigate = useNavigate();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [containwerWidth, setContainerWidth] = useState(0);
  const { setGlobalFontSize } = useFontSizeStore();

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
      reactRootDiv.style.width = '500px';
      reactRootDiv.style.height = '100vh';
      reactRootDiv.style.zIndex = '9999';

      if (targetElement) {
        targetElement.style.paddingLeft = '0';
        targetElement.style.paddingRight = '0';

        if (position === 'left') {
          targetElement.style.paddingLeft = '500px';
        } else if (position === 'right') {
          targetElement.style.paddingRight = '500px';
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
      reactRootDiv.style.width = '500px';
      reactRootDiv.style.height = '100vh';
      reactRootDiv.style.backgroundColor = 'white';
      targetElement.style.paddingRight = '500px';
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
      reactRootDiv.style.width = '500px';
      reactRootDiv.style.height = '100vh';
      reactRootDiv.style.backgroundColor = 'white';
      targetElement.style.paddingLeft = '500px';
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

  const closeElement = () => {
    const reactRootDiv = document.getElementById('app');
    const targetElement = document.getElementById('a-page');
    reactRootDiv?.remove();
    if (targetElement) {
      targetElement.style.paddingLeft = '0';
      targetElement.style.paddingRight = '0';
    }
  };

  const parentRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState('0.75em');

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newSize = entry.contentRect.width;
        setContainerWidth(newSize);
      }
    });

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (containwerWidth <= 550) {
      setFontSize('0.75em');
      setGlobalFontSize('0.75em');
    } else if (containwerWidth > 551 && containwerWidth <= 700) {
      setFontSize('1em');
      setGlobalFontSize('1em');
    } else {
      setFontSize('1.125em');
      setGlobalFontSize('1.125rem');
    }
  }, [containwerWidth]);

  return (
    <div className='dashboardMain' ref={parentRef}>
      <div className='dashboardHeader'>
        <div className='w-1-3'>
          <Logo width={'7.5rem'} height={'1.4375rem'} />
        </div>
        <div className='w-1-3 centerContainer'>
          <div className='dashboardIconsContainer'>
            <Icon
              icon='fluent:panel-left-48-filled'
              onClick={() => handleClick('left', insertSidePanelLeft)}
              cursor='pointer'
              width={20}
              height={14}
              className={`iconHoverEffect`}
            />

            <Icon
              icon='material-symbols-light:float-landscape-2-outline'
              cursor='pointer'
              width={20}
              className={`iconHoverEffect`}
              onClick={() => handleOpenPopup()}
            />
            <Icon
              icon='proicons:window-add'
              cursor='pointer'
              width={20}
              className={`iconHoverEffect`}
              onClick={() => handleClick('initial', injectReactApp)}
            />
            <Icon
              icon='fluent:panel-right-48-filled'
              cursor='pointer'
              width={14}
              height={14}
              onClick={() => handleClick('right', insertSidePanelRight)}
              className={`iconHoverEffect`}
            />
          </div>
        </div>
        <div className='w-1-3 rightContainer'>
          <div className='closeButton'>
            <Icon icon='ic:round-close' width={14} height={14} className='closeIcon' onClick={closeElement} />
          </div>
        </div>
      </div>

      {/* <input value={text} onChange={handleChange}>Type something'</input> */}
      {/* ZUSTAND */}
      {/* <button id='insert-html' onClick={handleNavigate}>
        Submit
      </button>

      <button id='count' onClick={increaseCount}>
        Count
      </button>
      <p>Count: {count}</p> */}
      {/* ZUSTAND */}

      <div className='_accordionSeparation'>
        <Accordion title='Product' icon='fa6-solid:chess-queen' isExpanded>
          <Product />
        </Accordion>
      </div>

      <div className='_largeAccordion '>
        <Accordion title='Essential Data' icon='bitcoin-icons:verify-filled' showBorder={false}>
          <Essential />
        </Accordion>
        <Accordion title='Advanced features' icon='iconamoon:lightning-1-fill' showBorder={false}>
          <Advanced />
        </Accordion>
        <Accordion title='Fees' icon='bxs:coin-stack' showBorder={false}>
          <Fees />
        </Accordion>
      </div>

      <div className='_accordionSeparation'>
        <Accordion
          customHeader={(props) => {
            setIsPanelOpen(props.expanded);
            return (
              <div className='_alertsCustomHeaderMain '>
                <div className='_alertsHalfContainer'>
                  <div className='_halfContent'>
                    <Icon icon={'fa6-solid:bell'} width={12} className={`icon`} />
                    <p className='accordionTitle'>{'Alerts'}</p>
                  </div>
                  <div className='_halfContent'>
                    <div className='_alertBoxGreen'>
                      <p>{'6'}</p>
                    </div>
                    <div className='_alertBoxYellow'>
                      <p>{'2'}</p>
                    </div>
                  </div>
                </div>
                <div className='_alertsHalfContainer _separation'>
                  <div className='_halfContent'>
                    <Icon icon={'mingcute:tag-2-fill'} width={12} className={`icon`} />
                    <p className='accordionTitle'>Rank & Prices</p>
                  </div>
                  <div className='_halfContent '>
                    <Icon
                      icon={props.expanded ? 'fa6-solid:circle-arrow-up' : 'fa6-solid:circle-arrow-down'}
                      width={12}
                      onClick={props.onClick}
                    />
                  </div>
                </div>
              </div>
            );
          }}>
          <Alerts isPanelOpen={isPanelOpen} />
        </Accordion>
      </div>

      <div className='_accordionSeparation'>
        <Accordion title='Offers' icon='fa6-solid:chalkboard-user'>
          <Offers />
        </Accordion>
      </div>

      <div className='_accordionSeparation'>
        <Accordion title='Settings' icon='ic:round-settings'>
          <Settings />
        </Accordion>
      </div>
    </div>
  );
};
