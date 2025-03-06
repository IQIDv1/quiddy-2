chrome.runtime.onInstalled.addListener(() => {
  console.log("Gmail Plugin Installed");
  chrome.runtime.sendMessage({ action: "debugLog", message: "Gmail Plugin Installed" });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "executeScript") {
    console.log("Received executeScript message");
    chrome.runtime.sendMessage({ action: "debugLog", message: "Received executeScript message" });
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      files: ["dist/app.bundle.js"]
    }, (results) => {
      if (chrome.runtime.lastError) {
        console.error("Error executing script:", chrome.runtime.lastError.message);
        chrome.runtime.sendMessage({ action: "debugLog", message: "Error executing script: " + chrome.runtime.lastError.message });
      } else {
        console.log("Script executed successfully:", results);
        chrome.runtime.sendMessage({ action: "debugLog", message: "Script executed successfully" });
      }
    });
  } else if (message.action === "fetchEmail") {
    sendResponse({
      subject: "FAFSA Inquiry",
      body: "When is my FAFSA deadline? Sarah Johnson",
      senderName: "Sarah Johnson"
    });
  }
});

// Mock email detection every 60 seconds
setInterval(() => {
  console.log("Sending mock email message");
  chrome.runtime.sendMessage({
    action: "emailDetected",
    email: {
      subject: "FAFSA Deadline",
      body: "Hello, when is my FAFSA deadline? - John Doe",
      senderName: "John Doe"
    }
  });
  chrome.runtime.sendMessage({ action: "debugLog", message: "Sending mock email message" });
}, 60000);