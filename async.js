//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function

function resolveAfter2Seconds(){
    return new Promise(resolve =>{
        setTimeout(()=> {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall(){
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

// asyncCall();

async function foo(){
    return 1
}

function fooPromise(){
    return Promise.resolve(1)
}

async function fooAwait(){
    await 1
}

function fooPromiseAwait(){
    return Promise.resolve(1).then(()=> undefined)
}

var resolveAfter2SecondsEx = function(){
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function (){
            resolve(20);
            console.log("slow promise is done");
        }, 2000);
    });
};

var resolveAfter1Second = function() {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(10);
            console.log("fast promise is done");
        }, 1000);
    });
};

var sequentialStart = async function(){
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2SecondsEx();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

var concurrentStart = async function() {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2SecondsEx();
    const fast = resolveAfter1Second();

    console.log(await slow);
    console.log(await fast);
}

var stillConcurrent = function(){
    console.log('==CONCURRENT START with Promise.all==');
    Promise.all([resolveAfter2SecondsEx(), resolveAfter1Second()]).then((messages)=>{
        console.log(messages[0]);
        console.log(messages[1]);
    });
}

var parallel = function(){
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2SecondsEx().then((message)=>console.log(message));
    resolveAfter1Second().then((message)=> console.log(message));
}

sequentialStart();
setTimeout(concurrentStart, 4000);
setTimeout(stillConcurrent, 7000);
setTimeout(parallel, 10000);

function resolveAfter2SecondsAsync(x){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(x);
        },2000);
    });
};

var add = async function(x){
    var a = await resolveAfter2SecondsAsync(20);
    var b = await resolveAfter2SecondsAsync(30);
    return x + a + b;
};

add(10).then(v=>{
    console.log(v);
});

(async function(x){
    var p_a = resolveAfter2SecondsAsync(20);
    var p_b = resolveAfter2SecondsAsync(30);
    return x + await p_a + await p_b;
})(10).then(v=>{
    console.log(v);
});

function resolveAfter2SecondsAwait(x){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(x);
        }, 2000);
    });
}

async function f1(){
    var x = await resolveAfter2SecondsAwait(10);
    console.log(x);
}

f1();

async function f2(){
    const thenable = {
        then: function(resolve, _reject){
            resolve('resolved!')
        }
    };
    console.log(await thenable);
}

f2();

async function f2Await(){
    var y = await 20;
    console.log(y);
}

f2Await();

async function f3(){
    try{
        var z = await Promise.reject(30);
    }catch(e){
        console.log(e);
    }
}

f3();
