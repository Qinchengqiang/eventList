
window.addEventListener('load', (e) => console.log('page is fully loaded'));
window.onload = (e) => console.log('page is fully loaded');

const badImg = document.getElementById('bad-img');
badImg.addEventListener('error', (e) => console.log(e));
badImg.error = () => console.log('error');