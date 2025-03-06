// Inject a div for the sidebar UI into Gmail
function ensureSidebarExists() {
    let sidebar = document.getElementById("financial-aid-sidebar");
    if (!sidebar) {
      sidebar = document.createElement("div");
      sidebar.id = "financial-aid-sidebar";
      sidebar.style.cssText = "position: fixed; right: 0; top: 0; width: 300px; height: 100vh; background: white; border-left: 1px solid #ccc; z-index: 10000; padding: 10px; overflow-y: auto;";
      document.body.appendChild(sidebar);
    }
    return sidebar;
  }
  
  const observer = new MutationObserver(() => {
    ensureSidebarExists();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  
  ensureSidebarExists();
  
  // Listen for debug logs from background.js
  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "debugLog") {
      console.log("Background.js log:", message.message);
    }
  });
  
  setTimeout(() => {
    console.log("Sending executeScript message");
    chrome.runtime.sendMessage({ action: "executeScript" });
  }, 500);