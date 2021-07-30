
const form = document.getElementById('form');
const input = document.querySelector('input');

// form focus
form.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
}, true);
form.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);


// input
function updateValue(e) {
    console.log(e.target.value);
}
input.addEventListener('input', updateValue);

// input invalid
input.addEventListener('invalid', e => console.log(e.target.value))
// The invalid event fires when a submittable element has been checked for validity
// and doesn't satisfy its constraints


// input focus
const password = document.querySelector('input[type="password"]');
password.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
});
password.addEventListener('blur', (event) => {
    event.target.style.background = '';
});