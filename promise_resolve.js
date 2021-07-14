const promise1 = Promise.resolve(123);

promise1.then((value)=>{
    console.log(value);
});

Promise.resolve("Success").then(function(value){
    console.log(value);
}, function(value){

});

var p_array = Promise.resolve([1,2,3]);
p_array.then(function(v){
    console.log(v[0]);
});

var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function(value){
    console.log('value: '+value);
});
console.log('original === cast? '+ (original === cast));

var p1 = Promise.resolve({
    then: function(onFulfill, onReject){
        onFulfill("fulfilled!");
    }
});
console.log(p1 instanceof Promise);

p1.then(function(v){
    console.log(v);
}, function(e){

});

var thenable = {then: function(resolve){
    throw new TypeError("Throwing");
    resolve("Resolving");
}};

var p2 = Promise.resolve(thenable);
p2.then(function(v){

}, function(e){
    console.log(e);
});

var thenable = {then: function(resolve){
    resolve("Resolving");
    throw new TypeError("Throwing");
}};

var p3 = Promise.resolve(thenable);
p3.then(function(v){
    console.log(v);
}, function(e){

});