
function displayDone() {
    console.log('3 seconds has elapsed');
}

setTimeout(displayDone, 3000);

setTimeout(function () {
    console.log('3 seconds has elapsed');
}, 3000)

displayDone()

setTimeout(() => {
    console.log('3 seconds has elapsed');
}, 3000)

displayDone()

setTimeout(() => {
    console.log('2900');
}, 2900)
