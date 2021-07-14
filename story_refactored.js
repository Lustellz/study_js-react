var fakeSlowNetwork;

(function () {
    var lsKey = 'fake-slow-network';
    var networkFakeDiv = document.querySelector('.network-fake');
    var checkbox = networkFakeDiv.querySelector('input');

    fakeSlowNetwork = Number(localStorage.getItem(lsKey)) || 0;

    networkFakeDiv.style.display = 'block';
    checkbox.checked = fakeSlowNetwork;

    checkbox.addEventListener('change', function () {
        localStorage.setItem(lsKey, Number(checkbox.checked));
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    });
})();

function wait(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

function get(url) {
    var fakeNetworkWait = wait(3000 * Math.random() * fakeSlowNetwork);
    var requestPromise = new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('get', url);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(Error("Network Error"));
        };

        req.send();
    });
    return Promise.all([fakeNetworkWait, requestPromise]).then(function (results) {
        return results[1];
    });
}

function getJson(url) {
    return get(url).then(JSON.parse);
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


getJson('story.json').then(function (story) {
    addHtmlToPage(story.heading);
    return story.chapterUrls.map(getJson).reduce(function (chain, chapterPromise) {
        return chain.then(function () {
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
