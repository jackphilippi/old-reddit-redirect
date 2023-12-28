browser.storage.sync.get({ enable_modal: true }).then(items => {
    // If it's a media URL, don't bother. See https://github.com/jackphilippi/old-reddit-redirect/issues/1
    if (window.location.href.includes("i.redd.it")) {
        return;
    }
    // If the modal is disabled in options, don't show it 
    if (!items.enable_modal) {
        console.log("Modal is not enabled for old reddit redirect addon");
        return;
    }
    // Make sure we don't load multiple modals
    if (!document.getElementById("popup-content")) {
        var popup = document.createElement('div');
        popup.innerHTML = `
            <div id="popup-content" style="position: fixed; bottom: 10px; right: 10px; background-color: #f9f9f9; border: 1px solid #ddd; padding: 15px; z-index: 1000;">
                <p style="margin-bottom: 10px;">Would you like to redirect to old reddit?</p>
                <button id="redirect-btn" style="background-color: #4285f4; color: white; border: none; padding: 10px 15px; cursor: pointer; right: 0;">Go to old.reddit.com</button>
                <button id="close-btn" style="background-color: #666666; color: white; border: none; padding: 10px 15px; cursor: pointer; right: 0;">Close</button>
                <p style="font-size: 8px; margin-top: 10px; text-align: right; width: 100%;">old reddit viewer by fippi</p>
            </div>
        `;

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