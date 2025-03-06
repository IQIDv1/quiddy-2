// Inject a div for the sidebar UI into Gmail
const sidebar = document.createElement("div");
sidebar.id = "financial-aid-sidebar";
sidebar.style.cssText = "position: fixed; right: 0; top: 0; width: 300px; height: 100vh; background: white; border-left: 1px solid #ccc; z-index: 10000; padding: 10px;";
document.body.appendChild(sidebar);

// Load React and ReactDOM from a CDN (since there's no build step)
const reactScript = document.createElement('script');
reactScript.src = 'https://unpkg.com/react@18/umd/react.development.js';
reactScript.crossOrigin = "anonymous";
document.head.appendChild(reactScript);

const reactDOMScript = document.createElement('script');
reactDOMScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
reactDOMScript.crossOrigin = "anonymous";
document.head.appendChild(reactDOMScript);

// Load index.js after React and ReactDOM are loaded
const sidebarScript = document.createElement("script");
sidebarScript.src = chrome.runtime.getURL("index.js"); // Updated path to root index.js
document.head.appendChild(sidebarScript);