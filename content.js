browser.storage.sync.get({ enable_modal: true, simple_button: true, auto_redirect: false }).then(items => {
    // If it's a media URL, don't bother. See https://github.com/jackphilippi/old-reddit-redirect/issues/1
    // Also ignore poll and gallery links as they break
    if (
        window.location.href.includes("i.redd.it") ||
        window.location.href.includes("/gallery/") || 
        window.location.href.includes("/poll/")
    ) {
        return;
    }
    // If auto redirect is enabled, automatically redirect :)
    if (items.auto_redirect) {
        var currentUrl = window.location.href;
        var newUrl = currentUrl.replace('www.reddit.com', 'old.reddit.com');
        window.location.href = newUrl;
    }
    // If the modal is disabled in options, don't show it 
    if (!items.enable_modal) {
        console.log("Modal is not enabled for old reddit redirect addon");
        return;
    }
    // Make sure we don't load multiple modals
    if (!document.getElementById("popup-content")) {
        var popup = document.createElement('div');

        if (!items.simple_button) {
            popup.innerHTML = `
                <div id="popup-content" style="position: fixed; bottom: 10px; right: 10px; background-color: #f9f9f9; border: 1px solid #ddd; padding: 15px; z-index: 1000;">
                    <p style="margin-bottom: 10px;">Would you like to redirect to old reddit?</p>
                    <button id="redirect-btn" style="height: auto; background-color: #4285f4; padding-left: 10px; padding-right: 10px; color: white; border: none; cursor: pointer;">Go to old.reddit.com</button>
                    <button id="close-btn" style="height: auto; background-color: #666666; padding-left: 10px; padding-right: 10px; color: white; border: none; cursor: pointer;">Close</button>
                    <p style="font-size: 8px; margin-top: 10px; text-align: right; width: 100%;">old reddit viewer by fippi</p>
                </div>
            `;
        } else {
            popup.innerHTML = `
                <style>
                    a#redirect-btn:hover { text-shadow: 1px 1px #f0a008 !important; }
                </style>
                <div id="popup-content" style="position: fixed; bottom: 10px; right: 10px; background-color: #f9f9f9; border: 0; padding: 0; background: transparent; z-index: 1000;">
                    <a id="redirect-btn" style="text-decoration: none;cursor: pointer; font-size: 2em;">🥕</a>
                </div>
            `;
        }

        // Add popup to DOM
        document.body.appendChild(popup);

        // Set events for buttons
        document.getElementById('redirect-btn').addEventListener('click', () => {
            var currentUrl = window.location.href;
            var newUrl = currentUrl.replace('www.reddit.com', 'old.reddit.com');
            window.location.href = newUrl;
        });
        document.getElementById('close-btn').addEventListener('click', function() {
            popup.style.display = 'none';
        });
    }
});