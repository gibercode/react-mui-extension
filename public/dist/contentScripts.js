window.addEventListener('message', (event) => {
  // Validar que el mensaje proviene de la misma página
  if (event.source !== window) return;

  const { message } = event.data;

  if (message.type === 'OPEN_POPUP') {
    chrome.runtime.sendMessage(message);
  }
});
