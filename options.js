// Saves options to browser.storage
function saveOptions() {
    var enable_modal = document.getElementById('enable_modal').checked;
    browser.storage.sync.set({
        enable_modal: enable_modal
    });
}

// Restores the preferences stored in browser.storage
function restoreOptions() {
    browser.storage.sync.get({ enable_modal: true }, function(items) {
        document.getElementById('enable_modal').checked = items.enable_modal;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('enable_modal').addEventListener('change', saveOptions);