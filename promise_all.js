var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 100);
});

Promise.all([p1, p2, p3]).then(values => {
    console.log(values);
})

var p = Promise.all([1, 2, 3]);
var p2_ = Promise.all([1, 2, 3, Promise.resolve(444)]);
var p3_ = Promise.all([1, 2, 3, Promise.reject(555)]);

setTimeout(function () {
    console.log(p);
    console.log(p2_);
    console.log(p3_);
});

var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p_sync = Promise.all(resolvedPromisesArray);
console.log(p_sync);

setTimeout(function () {
    console.log('the stack is now empty');
    console.log(p_sync);
})

var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p_sync_reject = Promise.all(mixedPromisesArray);
console.log(p_sync_reject);
setTimeout(function () {
    console.log('the stack is now empty');
    console.log(p_sync_reject);
})

var p_empty = Promise.all([]);
var p_empty2 = Promise.all([1337, "hi"]);
console.log(p_empty);
console.log(p_empty2);
setTimeout(function () {
    console.log('the stack is now empty');
    console.log(p_empty2);
})

var p_reject1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('one'), 1000);
});

var p_reject2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('two'), 2000);
})

var p_reject3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('three'), 3000);
})

var p_reject4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('four'), 4000);
})

var p_reject5 = new Promise((resolve, reject) => {
    reject(new Error('reject'));
});

Promise.all([p_reject1, p_reject2, p_reject3, p_reject4, p_reject5])
    .then(values => {
        console.log(values);
    })
    .catch(error => {
        console.log(error.message)
    });

/* Promise.all([
    p_reject1.catch(error => { return error }),
    p_reject2.catch(error => { return error }),
    p_reject5.catch(error => { return error }),
    p_reject3.catch(error => { return error }),
    p_reject4.catch(error => { return error }),
]).then(values =>{
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
    console.log(values[3]);
    console.log(values[4]);
}) */

var p_pre1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('perform delayed p_pre1'), 1000);
});

var p_pre2 = new Promise((resolve, reject) => {
    reject(new Error('reject instant p_pre2'));
});

Promise.all([
    p_pre1.catch(error => {
        return error
    }),
    p_pre2.catch(error => {
        return error
    }),
]).then(values => {
    console.log(values[0])
    console.log(values[1])
})