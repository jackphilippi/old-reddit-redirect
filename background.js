// Handle clicking on the addon icon
browser.browserAction.onClicked.addListener((tab) => {
    if (tab.url.includes('www.reddit.com')) {
        let oldRedditUrl = tab.url.replace('www.reddit.com', 'old.reddit.com');
        browser.tabs.update(tab.id, {url: oldRedditUrl});
    }
});