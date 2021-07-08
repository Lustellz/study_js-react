var fakeSlowNetwork;
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

function getSync(url) {
    var startTime = Date.now();
    var waitTime = 3000 * Math.random() * fakeSlowNetwork;
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();

    while (waitTime > Date.now() - startTime);

    if (req.status === 200) {
        return req.response;
    }
    else {
        throw Error(req.statusText || "Request failed");
    }
}

function getJsonSync(url) {
    return JSON.parse(getSync(url));
}

try {
    var story = getJsonSync('story.json');
    addHtmlToPage(story.heading);

    story.chapterUrls.forEach(function (chapterUrl) {
        var chapter = getJsonSync(chapterUrl);
        addHtmlToPage(chapter.html);
    });

    addTextToPage("All done");
}
catch (err) {
    addTextToPage("Argh, broken: " + err.message);
}
document.querySelector('.spinner').style.display = 'none';