let popupWindowId = null;

// VALIDATE IF THE WINDOW IS OPEN IF NOT THEN OPEN
chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes('https://www.amazon.com/') && tab.url.includes('/dp/')) {
    if (popupWindowId) {
      chrome.windows.get(popupWindowId, (window) => {
        if (chrome.runtime.lastError) {
          popupWindowId = null;
          createPopupWindow();
        } else {
          chrome.windows.update(popupWindowId, { focused: true });
        }
      });
    } else {
      createPopupWindow();
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

chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'LOG') {
    console.log(request.message);
  }
});
