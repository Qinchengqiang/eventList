const button = document.querySelector('button');
const noContext = document.getElementById('noContextMenu');

// click, contextmenu, dblclick
button.addEventListener('click', event => {
    button.textContent = `Click count: ${event.detail}`;
});

noContext.addEventListener('contextmenu', e => {
    e.preventDefault(); // The context menu has been disabled on this paragraph
});

button.addEventListener('dblclick', function (e) {
    button.classList.toggle('large'); // double click to enlarge or reset default
    /** in .css file
     .large {
            transform: scale(1.3);
        }
     */
});

// mouseenter, mouseleave, mousemove
button.addEventListener('mouseenter', e => {
    button.style.border = '5px dotted orange';
    console.log('This is mouseenter event.');
});

button.addEventListener('mouseleave', e => {
    button.style.border = '1px solid #333';
    console.log('This is mouseleave event.');
});

button.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "orange";
}, false);


// select
function logSelection(event) {
    const selectedString = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    console.log(`You selected: ${selectedString}`);
}
const input = document.getElementById('text');
input.addEventListener('select', logSelection);