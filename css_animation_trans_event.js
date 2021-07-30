// css animation
const animated = document.querySelector('.animated');

animated.addEventListener('animationstart', () => {
    console.log('Animation started');
});
animated.addEventListener('animationend', () => {
    console.log('Animation ended');
});

let iterationCount = 0;
animated.onanimationiteration = () => {
    iterationCount++;
    console.log(`Animation iteration count: ${iterationCount}`);
};


// css transition
const transition = document.querySelector('.transition');

transition.addEventListener('transitionend', () => {
    console.log('Transition ended');
});
transition.ontransitionend = () => {
    console.log('Transition ended');
};