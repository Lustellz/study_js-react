const promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value)=>{
    console.log(value);
})

var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p_async = Promise.race(resolvedPromisesArray);
console.log(p_async);

setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p_async);
})

var foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(foreverPendingPromise);
});

var alreadyFulfilledProm = Promise.resolve(666);

var arr = [foreverPendingPromise, alreadyFulfilledProm, "not a promise"];
var arr2 = [foreverPendingPromise, "not a promise", Promise.resolve(666)];
var p_mixed = Promise.race(arr);
var p_mixed2 = Promise.race(arr2);

console.log(p_mixed);
console.log(p_mixed2);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p_mixed);
    console.log(p_mixed2);
});

var p_ex1 = new Promise(function(resolve, reject){
    setTimeout(()=>resolve('one'), 500);
});

var p_ex2 = new Promise(function(resolve, reject){
    setTimeout(()=>resolve('two'), 100);
});

Promise.race([p_ex1, p_ex2])
.then(function(value){
    console.log(value);
})

var p_ex3 = new Promise(function(resolve, reject){
    setTimeout(()=>resolve('three'), 100);
});

var p_ex4 = new Promise(function(resolve, reject){
    setTimeout(()=>reject(new Error('four')), 500);
});

Promise.race([p_ex3, p_ex4])
.then(function(value){
    console.log(value);
}, function(reason){

});

var p_ex5 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve('five'), 500);
});

var p_ex6 = new Promise(function(resolve, reject){
    setTimeout(()=> reject(new Error('six')),100);
});

Promise.race([p_ex5, p_ex6])
.then(function(value){

}, function(error){
    console.log(error.message);
});