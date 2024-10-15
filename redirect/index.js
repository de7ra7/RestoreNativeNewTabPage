void (chrome.tabs.getCurrent((tab) => { chrome.tabs.update(tab.id, { url: "chrome://new-tab-page", highlighted: true }) }));
