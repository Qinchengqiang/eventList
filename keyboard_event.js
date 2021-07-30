
function logKey(e) {
    console.log(` ${e.code}`);
}

document.addEventListener('keydown', logKey);
document.addEventListener('keyup', logKey);
