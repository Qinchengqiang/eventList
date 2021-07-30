
const form = document.getElementById('form');
const log = document.getElementById('log');

function logReset(event) {
    log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
}
function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
}

form.addEventListener('reset', logReset);
form.addEventListener('submit', logSubmit);
