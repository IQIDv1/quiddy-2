chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "fetchEmail") {
      sendResponse({
        subject: "FAFSA Inquiry",
        body: "When is my FAFSA deadline? Sarah Johnson",
        senderName: "Sarah Johnson"
      });
    }
  });