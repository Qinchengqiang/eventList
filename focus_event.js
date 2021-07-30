
const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
}, true);

form.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);
