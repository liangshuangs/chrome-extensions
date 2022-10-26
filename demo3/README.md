```
{
    "name": "dxdjx-analse",
    "description": "dxdjx-analse",
    "version": "1.0",
    "manifest_version": 3,
    "action": {
        "default_popup": "index.html",
        "default_icon": "images/icon-128.png"
    },
    "content_scripts": [
        {
            "js": ["scripts/content.js"],
            "matches": ["https://sjh.baidu.com/site/*"]
        }
    ],
    "background": {
        "service_worker": "scripts/background.js"
    }
}
```
background service_worker可以监听浏览器的事件行为，Service workers是运行在一个特定的js环境中，