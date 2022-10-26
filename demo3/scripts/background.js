// onInstalled 插件安装完成时
chrome.runtime.onInstalled.addListener(() => {
    // chrome.action.setBadgeText({
    //   text: "true",
    // });
    chrome.contextMenus.create({
        "id": "sampleContextMenu",
        "title": "Sample Context Menu",
        "contexts": ["selection"]
      });
  });
  chrome.action.onClicked.addListener(async(tab) => {
    if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
        // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        // Next state will always be the opposite
        const nextState = prevState === 'ON' ? 'OFF' : 'ON'
    
        // Set the action badge to the next state
        await chrome.action.setBadgeText({
          tabId: tab.id,
          text: nextState,
        });
    }
  })
  