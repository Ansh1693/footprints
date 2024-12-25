// Existing code for context menu and screenshot handling

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, sender, sendResponse);
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
  } else if (info.menuItemId === "saveText") {
    // console.log(info);

    console.log(info.selectionText);
  } else if (info.menuItemId === "saveImage") {
    console.log(info.srcUrl);
    console.log(info);
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveWebpage",
    title: "Footprint webpage!",
    contexts: ["all"],
  });

  // chrome.contextMenus.create({
  //   id: "saveScreenshot",
  //   title: "Footprint screenshot!",
  //   contexts: ["all"],
  // });

  chrome.contextMenus.create({
    id: "saveImage",
    title: "Footprint image!",
    contexts: ["image"],
  });

  chrome.contextMenus.create({
    id: "saveText",
    title: "Footprint text!",
    contexts: ["selection"],
  });
});

function checkAuthAndLogin() {
  chrome.storage.local.get(["authToken"], function (result) {
    if (!result.authToken) {
      chrome.tabs.create({ url: "http://localhost:5001/signin" });
    } else {
      if (result.expirationDate < Date.now()) {
        console.log("Auth token exists");
        console.log(result);
      } else {
        chrome.tabs.create({ url: "http://localhost:5001/signin" });
      }
    }
  });
}

function getAndSetCookie() {
  let cookie;
  chrome.cookies.getAll({ domain: "localhost" }, (cookies) => {
    cookie = cookies.find((cookie) => cookie.name === "accessToken");

    if (cookie) {
      chrome.storage.local.set({ authToken: cookie }, function () {
        console.log("Auth token stored");
      });

      checkAuthAndLogin();
    } else {
      checkAuthAndLogin();
    }
  });
}

chrome.runtime.onInstalled.addListener(getAndSetCookie);

chrome.runtime.onStartup.addListener(getAndSetCookie);
