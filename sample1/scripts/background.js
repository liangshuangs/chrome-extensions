// onInstalled 插件安装完成时
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "true",
    });
    console.log('dddd')
    chrome.contextMenus.create({
        "id": "sampleContextMenu",
        "title": "eeeee",
        "contexts": ["selection"]
      });
  });
  