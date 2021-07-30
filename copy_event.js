const source = document.querySelector('div.source');
const target = document.querySelector('div.target');

// The copy event fires when the user initiates a copy action through the browser's user interface.
source.addEventListener('copy', (event) => {
    // get string copied
    const selection = document.getSelection();
    // to re-set clipboard data to upperCase string
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});

// The cut event is fired when the user has initiated a "cut" action through the browser's user interface.
source.addEventListener('cut', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    selection.deleteFromDocument();
    event.preventDefault();
});

// The paste event is fired when the user has initiated a "paste" action
// through the browser's user interface.
target.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    paste = paste.toUpperCase();
    console.log('paste content: ', paste)
    event.preventDefault();
});