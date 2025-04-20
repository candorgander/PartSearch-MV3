// V3-compatible background.js
if (typeof browser === "undefined") {
  var browser = chrome;
}

// Create context menu when service worker installs
browser.runtime.onInstalled.addListener((details) => {
  browser.contextMenus.create({
    id: "LCSC",
    title: "Search part in LCSC",
    contexts: ["selection"]
  });

  browser.contextMenus.create({
    id: "Digikey",
    title: "Search part in Digikey",
    contexts: ["selection"]
  });

  browser.contextMenus.create({
    id: "Mouser",
    title: "Search part in Mouser",
    contexts: ["selection"]
  });

  // Open options page on install
  if (details.reason === "install") {
    browser.runtime.openOptionsPage();
  }
});

// Handle context menu clicks
browser.contextMenus.onClicked.addListener((info, tab) => {
  browser.storage.local.get({
    lcscTLD: "com",
    mouserTLD: "in",
    digikeyTLD: "in"
  }, (tlds) => {
    const query = encodeURIComponent(info.selectionText);
    let url = "";

    switch (info.menuItemId) {
      case "LCSC":
        url = `https://www.lcsc.${tlds.lcscTLD}/search?q=${query}`;
        break;
      case "Mouser":
        url = `https://www.mouser.${tlds.mouserTLD}/c/?q=${query}`;
        break;
      case "Digikey":
        url = `https://www.digikey.${tlds.digikeyTLD}/en/products?keywords=${query}`;
        break;
    }

    if (url) {
      browser.tabs.create({ url });
    }
  });
});
