// Inject a div for the sidebar UI into Gmail
const sidebar = document.createElement("div");
sidebar.id = "financial-aid-sidebar";
sidebar.style.cssText = "position: fixed; right: 0; top: 0; width: 300px; height: 100vh; background: white; border-left: 1px solid #ccc; z-index: 10000; padding: 10px; overflow-y: auto;";
document.body.appendChild(sidebar);

// Load the bundled app script
const appScript = document.createElement("script");
appScript.src = chrome.runtime.getURL("dist/app.bundle.js");
appScript.onerror = () => console.error("Failed to load app.bundle.js script");
document.head.appendChild(appScript);

// Render the app after the script is loaded
appScript.onload = () => {
  if (window.AppBundle && window.React && window.ReactDOM) {
    try {
      const sidebarDiv = document.getElementById('financial-aid-sidebar');
      if (sidebarDiv) {
        const root = window.ReactDOM.createRoot(sidebarDiv);
        root.render(window.React.createElement(window.AppBundle.default));
      } else {
        console.error("Sidebar div not found");
      }
    } catch (error) {
      console.error("Error rendering app:", error);
    }
  } else {
    console.error("AppBundle, React, or ReactDOM not found");
  }
};