function displayGreeting(name) {
    const message = `Hello, ${name}!`;
    console.log(message);
}

displayGreeting('Christopher');

function displayGreeting_(name, salutation = 'Hello') {
    console.log(`${salutation}, ${name}`);
}

displayGreeting_('Christopher');

displayGreeting_('Christopher', 'Hi');

function createGreetingMessage(name) {
    const message = `Hello, ${name}`;
    return message;
}

const greetingMessage = createGreetingMessage('Christopher');

function displayDone() {
    console.log('3 seconds has elapsed');
}

setTimeout(3000, displayDone);

setTimeout(3000, function () {
    console.log('3 seconds has elapsed');
})

setTimeout(3000, () => {
    console.log('3 seconds has elapsed');
})

let empty = () => { };

(() => 'foobar')();

var simple = a => a > 15 ? 15 : a;
simple(16);
simple(10); let max = (a, b) => a > b ? a : b;

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) => a + b);
var even = arr.filter(v => v % 2 == 0);
var double = arr.map(v => v * 2);
Promise.then(a => { }).then(b => { });
setTimeout(() => {
    console.log('I happen sooner');
    setTimeout(() => {
        console.log('I happen later');
    }, 1);
}, 1);

const arraySparse = [1, 3, , 7]
let numCallbackRuns = 0

arraySparse.forEach(function (element) {
    console.log(element)
    numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)

const items = ['item1', 'item2', 'item3']
const copyItems = []

for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i])
}

items.forEach(function (item) {
    copyItems.push(item)
})

function logArrayElements(element, index, array) {
    console.log('a[' + index + ']=' + element)
}

[2, 5, , 9].forEach(logArrayElements)

function Counter() {
    this.sum = 0
    this.count = 0
}

Counter.prototype.add = function (array) {
    array.forEach(function countEntry(entry) {
        this.sum += entry
        ++this.count
    }, this)
}

const obj = new Counter()
obj.add([2, 5, 9])
console.log(obj.count)
console.log(obj.sum)

function copy(obj) {
    const copy = Object.create(Object.getPrototypeOf(obj))
    const propNames = Object.getOwnPropertyNames(obj)

    propNames.forEach(function (name) {
        const desc = Object.getOwnPropertyDescriptor(obj, name)
        Object.defineProperty(copy, name, desc)
    })

    return copy
}

const obj1 = { a: 1, b: 2 }
const obj2 = copy(obj1)

let words = ['one', 'two', 'three', 'four']
words.forEach(function (word) {
    console.log(word)
    if (word === 'two') {
        words.shift()
    }
})

console.log(words);

function flatten(arr) {
    const result = []
    arr.forEach(function (i) {
        if (Array.isArray(i)) {
            result.push(...flatten(i))
        } else {
            result.push(i)
        }
    })

    return result
}

const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]
flatten(nested)

function* fibonacci(){
    let [prev, curr] = [0, 1];
    while(true){
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (const n of fibonacci()){
    console.log(n);
    if(n>=1000){
        break;
    }
}

const iterable = {
    [Symbol.iterator](){
        return {
            i: 0,
            next(){
                if(this.i<3){
                    return {
                        value: this.i++, done: false
                    };
                }
                return {value: undefined, done: true};
            }
        };
    }
};

for (const value of iterable){
    console.log(value);
}

Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable_ = [3,5,7];
iterable_.foo = ' hello';

for (const i in iterable_){
    console.log(i);
}

for (const i in iterable_){
    if(iterable_.hasOwnProperty(i)){
        console.log(i);
    }
}

for (const i of iterable_){
    console.log(i);
}

let numbers = [1,4,9]
let roots = numbers.map(function(num){
    return Math.sqrt(num)
})

console.log(numbers);
console.log(roots);

let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
]

let reformattedArray = kvArray.map(obj=>{
    let rObj = {}
    rObj[obj.key] = obj.value
    return rObj
})

console.log(reformattedArray);
console.log(kvArray);

let numbers_ = [1,4,9]
let doubles = numbers_.map(function(num){
    return num*2
})

console.log(doubles);
console.log(numbers_);

let map = Array.prototype.map
let a = map.call('Hello World', function(x){
    return x.charCodeAt(0)
})

console.log(a)

let elems = document.querySelectorAll('select option:checked');
let values = Array.prototype.map.call(elems, function(obj){
    return obj.value
})

function returnInt(element){
    return parseInt(element, 10)
}

['1', '2', '3'].map(returnInt);
['1', '2', '3'].map(str => parseInt(str))
['1', '2', '3'].map(Number)
['1.1', '2.2e2', '3e300'].map(Number)
['1.1', '2.2e2', '3e300'].amp(str=>parseInt(str))

let xs = ['10', '10', '10']
xs = xs.map(parseInt)

console.log(xs)

let numbers__ = [1,2,3,4]
let filteredNumbers = numbers__.map(function(num, index){
    if(index<3){
        return num
    }
})

console.log(numbers__);
console.log(filteredNumbers);

function promiseTimeout(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve,ms);
    })
}

async function simulateLongOperation(){
    await promiseTimeout(1000);
    return 42;
}

async function run(){
    const answer = await simulateLongOperation();
    console.log(answer);
}

run();