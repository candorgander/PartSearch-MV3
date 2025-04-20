// compat.js

// Create a cross-browser `browser` alias
if (typeof browser === "undefined") {
    var browser = {};
    browser.runtime = chrome.runtime;
    browser.storage = chrome.storage;
    browser.tabs = chrome.tabs;
    browser.contextMenus = chrome.contextMenus;
  }
  