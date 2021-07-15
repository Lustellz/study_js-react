//about size of elements: offsetHeight, offsetWidth, offsetLeft, offsetParent, offsetTop
//about size of hidden parts: scrollHeight, scrollLeft, scrollTop, scrollWidth (how much can be scrolled)
//move focus with scroll: scrollIntoView()
//about media playing on browser: canplay, canplaythrough, play, playing, waiting
//about media's change: durationchange
//about media's loading: progress
//about media's playing state change: timeupdate, volumechange
//positions for scrolls: window.pageXOffset, window.pageYOffset, screen.availHeight, screen.availWidth
//on DOM Events: https://www.w3schools.com/jsref/dom_obj_event.asp

function supportType(vidType, codType) {
    var vid = document.createElement('video');
    let isSupp = vid.canPlayType(vidType + ';codes="' + codType + '"')
    if (isSupp === " ") {
        isSupp = "No";
    }
}

function load(){
    document.getElementById("myVideo").load();
}

function playVid(vid){
    vid.play();
}

function pauseVid(vid){
    vid.pause();
}

function enableAutoplay(vid){
    vid.autoplay = true;
    vid.load();
}

function disableAutoplay(vid){
    vid.autoplay = false;
    vid.load();
}

function buffered(vid){
    vid.buffered.end(0);
}

function enableControls(vid){
    vid.controls = true;
    vid.load();
}

function disableControls(vid){
    vid.controls = false;
    vid.load();
}

function currentSrc(vid){
    console.log(vid.currentSrc);
}

function currentTime(vid){
    console.log(vid.currentTime);
}

function setDefaultMuted(vid){
    vid.defaultMuted = true;
    vid.load();
}

function setPlaySpeed(vid){
    vid.defaultPlaybackRate = 2;
    vid.load();
}

function duration(vid){
    console.log(vid.duration);
}

function ended(vid){
    console.log(vid.ended);
}

function error(vid){
    console.log(vid.error.code);
}

function enableLoop(vid){
    vid.loop = true;
    vid.load();
}

function setMediaGroup(vid1, vid2){
    vid1.setMediaGroup = "test";
    vid2.setMediaGroup = "test";
}

function setMuted(vid){
    vid.muted = true;
}

function networkState(vid){
    console.log(vid.networkState);
}

function paused(vid){
    console.log(vid.paused);
}

function played(vid){
    vid.played.start(0);
    vid.played.end(0);
}

function enablePreload(vid){
    vid.preload = "auto";
}

function readyState(vid){
    console.log(vid.readyState);
}

function seekable(vid){
    vid.seekable.start(0);
    vid.seekable.end(0);
}

function seeking(vid){
    console.log(vid.seeking);
}