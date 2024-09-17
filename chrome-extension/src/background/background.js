// Existing code for context menu and screenshot handling
/*
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, sender, sendResponse);
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveWebpage",
    title: "Footprint webpage!",
    contexts: ["all"],
  });

  chrome.contextMenus.create({
    id: "saveScreenshot",
    title: "Footprint screenshot!",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "saveWebpage") {
    console.log(info, tab);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // chrome.tabs.sendMessage(tabs[0].id, { message: "save_webpage" });
      console.log(tabs);
    });
  } else if (info.menuItemId === "saveScreenshot") {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, (dataUrl) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          message: "save_screenshot",
          data: dataUrl,
        });
      });
    });
  }
});
*/

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveWebpage",
    title: "Footprint webpage!",
    contexts: ["all"],
  });

  chrome.contextMenus.create({
    id: "saveScreenshot",
    title: "Footprint screenshot!",
    contexts: ["all"],
  });
});

// background.js
const WEBSITE_URL = "https://your-website.com";

function checkAuthAndLogin() {
  chrome.storage.local.get(["authToken"], function (result) {
    if (!result.authToken) {
      chrome.tabs.create({ url: "https://bloks.social/login" });
    }
  });
}

// Listen for extension installation or update
chrome.runtime.onInstalled.addListener(checkAuthAndLogin);

// Listen for extension startup
chrome.runtime.onStartup.addListener(checkAuthAndLogin);

// Listen for messages from the website
chrome.runtime.onMessageExternal.addListener(function (
  request,
  sender,
  sendResponse
) {
  if (request.type === "LOGIN") {
    // Store the auth token
    chrome.storage.local.set({ authToken: request.token }, function () {
      console.log("Auth token stored");
      sendResponse({ success: true });
    });
  }
  return true; // Indicates that the response is sent asynchronously
});
