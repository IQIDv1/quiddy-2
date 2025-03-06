const sidebar = document.createElement("div");
sidebar.id = "gmail-sidebar";
sidebar.style.cssText = "position: fixed; right: 0; top: 0; width: 300px; height: 100vh; background: white; border-left: 1px solid #ccc; z-index: 10000;";
document.body.appendChild(sidebar);

const iframe = document.createElement("iframe");
iframe.src = chrome.runtime.getURL("sidebar.html");
iframe.style.cssText = "width: 100%; height: 100%; border: none;";
sidebar.appendChild(iframe);
