chrome.runtime.onInstalled.addListener(() => {
  console.log("Gmail Plugin Installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "fetchEmail") {
      sendResponse({
          subject: "FAFSA Inquiry",
          body: "When is my FAFSA deadline? Sarah Johnson",
          senderName: "Sarah Johnson"
      });
  }
});

// Mock email detection every 60 seconds
setInterval(() => {
  chrome.runtime.sendMessage({
      action: "newEmail",
      email: {
          subject: "FAFSA Deadline",
          body: "Hello, when is my FAFSA deadline? - John Doe",
          senderName: "John Doe"
      }
  });
}, 60000);
