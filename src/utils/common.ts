export const isExtensionContext = () => {
  return !!chrome.runtime && !window.document;
};
