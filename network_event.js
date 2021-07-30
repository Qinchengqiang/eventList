// addEventListener version
window.addEventListener('online', (event) => {
    console.log("You are now connected to the network.");
});

// ononline version
window.ononline = (event) => {
    console.log("You are now connected to the network.");
};

// addEventListener version
window.addEventListener('offline', (event) => {
    console.log("The network connection has been lost.");
});

// onoffline version
window.onoffline = (event) => {
    console.log("The network connection has been lost.");
};
