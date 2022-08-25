console.log("extensão carregada");
chrome.storage.local.get("message", function (result) {
  console.log("value:", result);
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["grab.js"],
  });
});

chrome.runtime.onMessage.addListener(function (message) {
  chrome.tabs.create({ url: "https://flightprices.vercel.app/" }, (tab) => {});
});
