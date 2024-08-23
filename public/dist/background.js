let popupWindowId = null;

chrome.action.onClicked.addListener((tab) => {
  if (popupWindowId) {
    // Verifica si la ventana aún está abierta
    chrome.windows.get(popupWindowId, (window) => {
      if (chrome.runtime.lastError) {
        // Si hay un error, significa que la ventana ya no existe, así que la creamos de nuevo
        popupWindowId = null;
        createPopupWindow(); // Llama a la función para crear una nueva ventana
      } else {
        // Si la ventana existe, la enfocamos
        chrome.windows.update(popupWindowId, { focused: true });
      }
    });
  } else {
    // Si no hay una ventana abierta, crea una nueva
    createPopupWindow();
  }
});

function createPopupWindow() {
  chrome.windows.create(
    {
      url: "index.html",
      type: "popup",
      width: 1000,
      height: 1200,
      left: 100,
      top: 100,
      focused: true,
    },
    (window) => {
      popupWindowId = window.id; // Almacena el ID de la ventana recién creada
    }
  );
}
