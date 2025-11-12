document.getElementById('loadTabsButton').onclick = function() {
    chrome.tabs.query({url: '*://*.youtube.com/watch*'}, function(tabs) {
      var tabsList = document.getElementById('tabsList');
      tabsList.innerHTML = ''; // clear the list
      chrome.storage.local.get(['controlledTabId'], function(result) {
        var controlledTabId = result.controlledTabId;
        for (let tab of tabs) {
          let tabElement = document.createElement('li');
          tabElement.textContent = tab.title;
          // Highlight the tab if it's the controlled tab
          if (tab.id === controlledTabId) {
            tabElement.style.backgroundColor = 'lightblue';
          }
          tabElement.onclick = function() {
            // Remove highlight from all list items
            for (let item of tabsList.children) {
              item.style.backgroundColor = '';
            }
            // Highlight the selected tab
            tabElement.style.backgroundColor = 'lightblue';
            // Save the selected tab ID
            chrome.storage.local.set({controlledTabId: tab.id});
            // Send message to background.js to update controlledTabId
            chrome.runtime.sendMessage({controlledTabId: tab.id});
            // Refresh the selected tab
            chrome.tabs.reload(tab.id);
          };
          tabsList.appendChild(tabElement);
        }
      });
    });
  };
  
  

