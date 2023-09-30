document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.code === 'Space') {
        browser.runtime.sendMessage({type: "ctrl_space_pressed"});
    }
});