const badImg = document.getElementById('bad-img');

// load
window.addEventListener('load', (e) => console.log('page is fully loaded'));
window.onload = (e) => console.log('page is fully loaded');
badImg.addEventListener('load', (e) => console.log('badImg is fully loaded'));

// beforeunload & unload
window.addEventListener('beforeunload', function(event) {
    console.log('I am the 1st one.');
});
window.addEventListener('unload', function(event) {
    console.log('I am the 2rd one.');
});

// error
badImg.addEventListener('error', (e) => console.log(e));
badImg.error = () => console.log('error');

// abort
const video = document.querySelector("video");
video.addEventListener('abort', () => {
    console.log(`Abort loading`);
});


/**
 * input example
 */
const beforeUnloadListener = (event) => {
    event.preventDefault();
    return event.returnValue = "Are you sure you want to exit?";
};

const nameInput = document.querySelector("#name");
nameInput.addEventListener("input", (event) => {
    if (event.target.value !== "") {
        addEventListener("beforeunload", beforeUnloadListener, {capture: true});
    } else {
        removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
    }
});


