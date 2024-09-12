// VALIDATE IF THE WINDOW IS OPEN IF NOT THEN OPEN
chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes('https://www.amazon.com/') && tab.url.includes('/dp/')) {
    injectReactApp(tab.id);
  }
});

function injectReactApp(tabId) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: () => {
      try {
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
        console.error('Error injecting React app:', error);
      }
    },
  });
}

//MAKE FLOATING POPUP

let popupWindowId = null;

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes('https://www.amazon.com/') && tab.url.includes('/dp/')) {
    if (popupWindowId) {
      chrome.windows.get(popupWindowId, (window) => {
        if (chrome.runtime.lastError) {
          popupWindowId = null;
          injectReactApp(tab.id);
          // createPopupWindow();
        } else {
          chrome.windows.update(popupWindowId, { focused: true });
        }
      });
    }
  }
});
function createPopupWindow() {
  chrome.windows.create(
    {
      url: 'index.html',
      type: 'popup',
      width: 500,
      height: 700,
      left: 0,
      top: 100,
      focused: true,
    },
    (window) => {
      popupWindowId = window.id;
    },
  );
}

function closePopupWindow() {
  if (popupWindowId) {
    chrome.windows.remove(popupWindowId, () => {
      popupWindowId = null;
    });
  }
}

//MAKE FLOATING POPUP

// LISTENERS MESSAGE
chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'LOG') {
    console.log(request.message);
  }
  if (request.type === 'CLOSE_POPUP') {
    if (popupWindowId) {
      chrome.windows.remove(popupWindowId, () => {
        popupWindowId = null;
      });
    }
  }
  if (request.type === 'OPEN_POPUP') {
    createPopupWindow();
  }
});
// LISTENERS MESSAGE
