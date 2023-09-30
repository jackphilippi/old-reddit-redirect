browser.runtime.onMessage.addListener((message, sender) => {
    if (message.type === "ctrl_space_pressed") {
        browser.tabs.query({active: true, currentWindow: true}, tabs => {
            let tab = tabs[0];
            if (tab.url.includes('www.reddit.com')) {
                let oldRedditUrl = tab.url.replace('www.reddit.com', 'old.reddit.com');
                browser.tabs.update(tab.id, {url: oldRedditUrl});
            }
        });
    }
});

browser.browserAction.onClicked.addListener((tab) => {
    if (tab.url.includes('www.reddit.com')) {
        let oldRedditUrl = tab.url.replace('www.reddit.com', 'old.reddit.com');
        browser.tabs.update(tab.id, {url: oldRedditUrl});
    }
});