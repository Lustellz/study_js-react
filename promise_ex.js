'use strict';
var promiseCount = 0;

function testPromise(){
    var thisPromiseCount = ++promiseCount;

    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount+ ') start (<small>syncronous code starts</small>)<br/>');

    var p1 = new Promise(
        function(resolve, reject){
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
            ') promise start (<small> asyncronous code starts</small>)<br/>');

            window.setTimeout(
                function(){
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000
            );
        }
    );

 p1.then(
     function(val){
         log.insertAdjacentHTML('beforeend', val + ') resolve promise (<small>syncronous code ends</small>)<br/>');
     }
 )
 .catch(
     function(reason){
         console.log('deal with rejected promise('+ reason + ') here');
     }
 );
 log.insertAdjacentHTML('beforeend', thisPromiseCount+') create promise (<small> asyncronous code ends</small>)<br/>');   
}