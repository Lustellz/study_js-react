function foo(b) {
    let a = 10
    return a + b + 11
}

function bar(x) {
    let y = 3
    return foo(x * y)
}

console.log(bar(7))

const s = new Date().getSeconds();

setTimeout(function () {
    console.log("Ran after " + (new Date().getSeconds() - s) + "seconds");
}, 500)

while (true) {
    if (new Date().getSeconds - s >= 2) {
        console.log("Good, looped for 2 seconds")
        break;
    }
}

(function(){
    console.log('this is the start');

    setTimeout(function cb(){
        console.log('Callback 1: this is a msg from call back');
    });

    console.log('this is just a message');

    setTimeout(function cb1(){
        console.log('Callback 2: this is a msg from call back');
    }, 0);

    console.log('this is the end');
})();