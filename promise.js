new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
}).then(() => {
    throw new Error('Something Failed');
    console.log('Do this');
}).catch(() => {
    console.log('Do that');
})
    .then(() => {
        console.log('Do this, whaever happened before');
    })

function logFetch(url) {
    return fetch(url)
        .then(response => response.text())
        .then(text => {
            console.log(text);
        }).catch(err => {
            console.error('fetch failed', err);
        });
}

async function logFetch_(url) {
    try {
        const response = await fetch(url);
        console.log(await response.text());
    }
    catch (err) {
        console.log('fetch failed', err);
    }
}

function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function hello() {
    await wait(500);
    return 'world';
}

async function foo() {
    await wait(500);
    throw Error('bar');
}

function getResponseSize(url) {
    return fetch(url).then(response => {
        const reader = response.body.getReader();
        let total = 0;

        return reader.read().then(function processResult(result) {
            if (result.done) return total;

            const value = result.value;
            total += value.length;
            console.log('Received chunk', value);

            return reader.read().then(processResult);
        })
    })
}

async function getResponseSize_(url) {
    const response = await fetch(url);
    const reader = response.body.getReader();
    let result = await reader.read();
    let total = 0;

    while (!result.done) {
        const value = result.value;
        total += value.length;
        console.log('Received chunk', value);
        result = await reader.read();
    }
    return total;
}

async function getResponseSize__(url) {
    const response = await fetch(url);
    let total = 0;

    for await (const value of response.read()) {
        total += value.length;
        console.log('Received chunk', value);
    }
    return total;
}

let urls = [];

const jsonPromises = urls.map(async url => {
    const response = await fetch(url);
    return response.json();
})

const storage = {
    async getAvatar(name) {
        const cache = await caches.open('avatars');
        return cache.match(`/avatars/${name}.jpg`)
    }
};

storage.getAvatar('jaffathecake').then(response => console.log(response));

class Storage {
    constructor() {
        this.cachePromise = caches.open('avatars');
    }
    async getAvatar(name) {
        const cache = await this.cachePromise;
        return cache.match(`/avatars/${name}.jpg`);
    }
}

const storage_ = new Storage();
storage_.getAvatar('jaffathecake').then(res => console.log(res));

async function series() {
    await wait(500);
    await wait(500);
    return "done";
}

async function parallel() {
    const wait1 = wait(500);
    const wait2 = wait(500);
    await wait1;
    await wait2;
    return "done!";
}

function logInOrder(urls) {
    const textPromises = urls.map(url => {
        return fetch(url).then(response => response.text());
    });

    textPromises.reduce((chain, textPromise) => {
        return chain.then(() => textPromise)
            .then(text => console.log(text));
    }, Promise.resolve());
}

async function logInOrder_(urls) {
    const textPromises = urls.map(async url => {
        const response = await fetch(url);
        return response.text();
    });

    for (const textPromise of textPromises) {
        console.log(await textPromise);
    }
}

function get(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            if (req.status === 200) {
                resolve(req.response);
            }
            else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(Error("Network Error"));
        };
        req.send();
    });
}

get('story.json').then(function (response) {
    console.log("Success", response);
}, function (error) {
    console.error("Failed", error);
})

var promise = new Promise(function (resolve, reject) {
    resolve(1);
});

promise.then(function (val) {
    console.log(val);
    return val + 2;
}).then(function (val) {
    console.log(val);
})

get('story.json').then(function (response) {
    return JSON.parse(response);
}).then(function (response) {
    console.log("Yes, JSON", response);
})

get('story.json').then(JSON.parse).then(function (response) {
    console.log("JSON", response);
})

function getJSON(url) {
    return get(url).then(JSON.parse).catch(function (err) {
        console.log("getJSON failed for", url, err);
        throw err;
    });
}

getJSON('story.json').then(function (story) {
    return getJSON(story.chapterUrls[0]);
}).then(function (chapter1) {
    console.log("Got chapter 1.", chapter1);
})

var storyPromise;

function getChapter(i) {
    storyPromise = storyPromise || getJSON('story.json');

    return storyPromise.then(function (story) {
        return getJSON(story.chapterUrls[i]);
    })
}

getChapter(0).then(function (chapter) {
    console.log(chapter);
    return getChapter(1);
}).then(function (chapter) {
    console.log(chapter);
})

get('story.json').then(function (response) {
    console.log("Success", response);
}).catch(function (error) {
    console.error("Failed", error);
})

get('story.json').then(function (response) {
    console.log("Success", response);
}).then(undefined, function (error) {
    console.log("Failed", error);
})

var jsonPromise = new Promise(function (resolve, reject) {
    resolve(JSON.parse("This is not JSON"));
});

jsonPromise.then(function (data) {
    console.log("It worked", data);
}).catch(function (err) {
    console.log("It failed", err);
})

var fakeSlowNetwork;

function getSync(url) {
    var startTime = Date.now();
    var waitTime = 3000 * Math.random() * fakeSlowNetwork;
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();

    while (waitTime > Date.now() - startTime);

    if (req.status === 200)
        return req.response;
    else
        throw Error(req.statusText || "Request failed");
}

function getJSONSync(url) {
    return JSON.parse(getSync(url));
}

var storyDiv = document.querySelector('.story');

function addHtmlToPage(content) {
    var div = document.createElement('div');
    div.innerHTML = content;
    storyDiv.appendChild(div);
}

function addTextToPage(content) {
    var p = document.createElement('p');
    p.textContent = content;
    storyDiv.appendChild(p);
}

getJSON('story.json').then(function (story) {
    return getJSON(story.chapterUrls[0]);
}).then(function (chapter1) {
    addHtmlToPage(chapter1.html);
}).catch(function () {
    addTextToPage("Failed to show chapter");
}).then(function () {
    document.querySelector('.spinner').style.display = 'none';
})

try {
    var story = getJSONSync('story.json');
    var chapter1 = getJSONSync(story.chapterUrls[0]);
    addHtmlToPage(chapter1.html);
} catch (e) {
    addTextToPage("Failed to show chapter");
}
document.querySelector('.spinner').style.display = 'none'

try {
    var story = getJSONSync('story.json');
    addHtmlToPage(story.heading);

    story.chapterUrls.forEach(function (chapterUrl) {
        var chapter = getJSONSync(chapterUrl);
        addHtmlToPage(chapter.html);
    });

    addTextToPage("All done");
} catch (err) {
    addTextToPage("Broken: " + err.message);
}

document.querySelector('.spinner').style.display = 'none'

getJSON('story.json').then(function (story) {
    addHtmlToPage(story.heading);
    return story.chapterUrls.reduce(function (sequence, chapterUrl) {
        return sequence.then(function () {
            return getJSON(chapterUrl);
        }).then(function (chapter) {
            addHtmlToPage(chapter.html);
        });
    }, Promise.resolve())
}).then(function () {
    addTextToPage("All done");
}).catch(function (err) {
    addTextToPage("Broken: " + err.message);
}).then(function () {
    document.querySelector('.spinner').style.display = 'none';
})

getJSON('story.json').then(function (story) {
    addHtmlToPage(story.heading);
    return Promise.all(
        story.chapterUrls.map(getJSON)
    );
}).then(function (chapters) {
    chapters.forEach(function (chapter) {
        addHtmlToPage(chapter.html);
    });
    addTextToPage("All done");
}).catch(function (err) {
    addTextToPage("Broken: " + err.message);
}).then(function () {
    document.querySelector('.spinner').style.display = 'none';
});

getJSON('story.json')
    .then(function (story) {
        addHtmlToPage(story.heading);
        return story.chapterUrls.map(getJSON)
            .reduce(function (sequence, chapterPromise) {
                return sequence
                    .then(function () {
                        return chapterPromise;
                    }).then(function (chapter) {
                        addHtmlToPage(chapter.html);
                    });
            }, Promise.resolve());
    }).then(function () {
        addTextToPage("All done");
    }).catch(function (err) {
        addTextToPage("Broken: " + err.message);
    }).then(function () {
        document.querySelector('.spinner').style.display = 'none';
    })

const applyAsync = (acc, val) => acc.then(val);
const composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve(x));

const transformData = composeAsync();
const result3 = transformData();

Promise.resolve().then(() => console.log(2));
console.log(1);

const wait__ = ms => new Promise(resolve => setTimeout(resolve, ms));
wait__().then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1);

Promise.resolve("Success").then(function(value){
    console.log(value);
}, function(value){

})

var p = Promise.resolve([1,2,3]);
p.then(function(v){
    console.log(v[0]);
});

var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function(value){
    console.log('value: '+value);
});
console.log('original === cast ? '+(original === cast));

var p1 = Promise.resolve({
    then: function(onFulfill, onReject){
        onFulfill("fulfilled!");
    }
});
console.log(p1 instanceof Promise)

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

let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Success!");
    }, 240);
});

myFirstPromise.then((successMessage)=>{
    console.log("Yay!"+successMessage);
});