let popupWindowId = null;

// VALIDATE IF THE WINDOW IS OPEN IF NOT THEN OPEN
chrome.action.onClicked.addListener((tab) => {
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
