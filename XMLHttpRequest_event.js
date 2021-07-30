const xhrButtonSuccess = document.querySelector('.xhr.success');
const xhrButtonError = document.querySelector('.xhr.error');
const xhrButtonAbort = document.querySelector('.xhr.abort');

function handleEvent(e) {
    console.log(`${e.type}: ${e.loaded} bytes transferred\n`)
}

function addListeners(xhr) {    // XMLHttpRequest Event Listeners
    xhr.addEventListener('loadstart', handleEvent);
    xhr.addEventListener('load', handleEvent);
    xhr.addEventListener('loadend', handleEvent);
    xhr.addEventListener('progress', handleEvent);
    xhr.addEventListener('error', handleEvent);
    xhr.addEventListener('abort', handleEvent);
}

function runXHR(url) {
    const xhr = new XMLHttpRequest();   // a XMLHttpRequest
    addListeners(xhr);
    xhr.open("GET", url);
    xhr.send();
    return xhr;
}

xhrButtonSuccess.addEventListener('click', () => {
    runXHR('https://mdn.mozillademos.org/files/16553/DgsZYJNXcAIPwzy.jpg');
});

xhrButtonError.addEventListener('click', () => {
    runXHR('https://somewhere.org/i-dont-exist');
});

xhrButtonAbort.addEventListener('click', () => {
    runXHR('https://mdn.mozillademos.org/files/16553/DgsZYJNXcAIPwzy.jpg').abort();
});