const sidebar = document.createElement("div");
sidebar.id = "gmail-sidebar";
sidebar.style.cssText = "position: fixed; right: 0; top: 0; width: 300px; height: 100vh; background: white; border-left: 1px solid #ccc; z-index: 10000;";
document.body.appendChild(sidebar);

// Wait for React to be loaded, then render App.jsx
const script = document.createElement("script");
script.src = chrome.runtime.getURL("index.js"); // Ensure this script loads React app
document.body.appendChild(script);
