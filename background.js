let pdfLinks = [];

chrome.webRequest.onCompleted.addListener(
  function(details) {
    if (details.url.includes('.pdf')) {
      pdfLinks.push(details.url);
    }
  },
  { urls: ["<all_urls>"] }
);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "getPdfLinks") {
    sendResponse({ links: pdfLinks });
  }
});

chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  if (details.frameId === 0) { // Only listen to the main frame
    pdfLinks = []; // Reset PDF links when a new navigation starts
  }
});
