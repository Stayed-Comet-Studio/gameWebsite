DebugMod = true;

let html = document.documentElement;
let body = getObjectByID('context');
let sizeAlert = getObjectByID('sizeAlerts');

window.onload = function pageOnLoad() {
    pageContainCheck();
    coverReSize();
    document.getElementById("Loading").style.display = 'none';
    body.style.display = "block";
    body.style.animation = 'FadeIn 1s ease-in-out';
};

window.onresize = function pageReSize() {
    pageContainCheck();
    coverReSize();
};

function pageContainCheck() {
    if (html.clientHeight < 320 || html.clientWidth < 320) {
        sizeAlert.style.display = "block";
        body.style.display = "none";
    } else {
        sizeAlert.style.display = "none";
        body.style.display = "block";
    }
}

function coverReSize() {
    getObjectByID("Cover").style.height = html.clientHeight + "px";
}