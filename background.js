chrome.runtime.onMessage.addListener(function(request) {
    if (request.controlledTabId) {
      chrome.storage.local.set({controlledTabId: request.controlledTabId});
    }
  });

chrome.commands.onCommand.addListener(function(command) {
    chrome.storage.local.get(['controlledTabId'], function(result) {
        //console.log("this is the command:")
        //console.log(command)
      if (result.controlledTabId) {
        chrome.tabs.sendMessage(result.controlledTabId, {command: command});
      } else {
        console.log('No controlled tab found.');
      }
    });
  });
  