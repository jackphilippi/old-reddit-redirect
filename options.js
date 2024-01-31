// Saves options to browser.storage
function saveOptions() {
    var enable_modal = document.getElementById('enable_modal').checked;
    var simple_button = document.getElementById('simple_button').checked;
    browser.storage.sync.set({
        enable_modal,
        simple_button
    });
}

// Restores the preferences stored in browser.storage
function restoreOptions() {
    browser.storage.sync.get({ enable_modal: true, simple_button: true }, function(items) {
        document.getElementById('enable_modal').checked = items.enable_modal;
        document.getElementById('simple_button').checked = items.simple_button;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('enable_modal').addEventListener('change', saveOptions);
document.getElementById('simple_button').addEventListener('change', saveOptions);