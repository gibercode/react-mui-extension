chrome.action.onClicked.addListener((tab) => {
  chrome.windows.create({
    url: "index.html",
    type: "popup",
    width: 1000,
    height: 1200,
    left: 100,
    top: 100,
    focused: true,
  });
});
