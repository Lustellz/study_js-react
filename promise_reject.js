Promise.reject("Testing static reject").then(function(reason){

}, function(reason){
    console.log(reason);
});

Promise.reject(new Error("fail")).then(function(error){

}, function(error){
    console.log(error);
});