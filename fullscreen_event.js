// window resize
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');
function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}
window.onresize = reportWindowSize;


/** scroll */
// The scroll event fires when the document view has been scrolled
// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/
function doSomething(scrollPos) {
    // Do something with the scroll position
}
let ticking = false;
document.addEventListener('scroll', function(e) {
    let lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(lastKnownScrollPosition);
            ticking = false;
        });
        ticking = true;
    }
});

/** fullscreenchange and fullscreenerror */
// The fullscreenchange event is fired immediately after the browser switches into or out of full-screen mode
document.addEventListener('fullscreenchange', (event) => {
    // document.fullscreenElement will point to the element that is in fullscreen mode if there is one.
    // If there isn't one, the value of the property is null.
    if (document.fullscreenElement) {
        console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } else {
        console.log('Leaving full-screen mode.');
    }
});

document.addEventListener('fullscreenerror', (event) => {
    console.error('an error occurred changing into fullscreen');
    console.log(event);
});

