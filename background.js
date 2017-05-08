chrome.browserAction.onClicked.addListener(function(tab) {chrome.tabs.executeScript({file: 'sound.js'});});
