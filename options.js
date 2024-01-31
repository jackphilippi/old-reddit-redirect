// Saves options to browser.storage
function saveOptions() {
    var enable_modal = document.getElementById('enable_modal').checked;
    var simple_button = document.getElementById('simple_button').checked;
    var auto_redirect = document.getElementById('auto_redirect').checked;

    browser.storage.sync.set({
        enable_modal,
        simple_button,
        auto_redirect,
    });
}

// Restores the preferences stored in browser.storage
function restoreOptions() {
    browser.storage.sync.get({ enable_modal: true, simple_button: true, auto_redirect: false }, function(items) {
        document.getElementById('enable_modal').checked = items.enable_modal;
        document.getElementById('simple_button').checked = items.simple_button;
        document.getElementById('auto_redirect').checked = items.auto_redirect;
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('enable_modal').addEventListener('change', saveOptions);
document.getElementById('simple_button').addEventListener('change', saveOptions);
document.getElementById('auto_redirect').addEventListener('change', saveOptions);