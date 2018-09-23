window.onload = pageOnLoad;
window.onresize = pageReSize;
let html = document.documentElement;
let body = document.getElementById("context");
let sizeAlert = document.getElementById("sizeAlerts");

function pageOnLoad() {
    pageContainCheck();
    coverReSize();
    body.style.display = "none";
}

function showPage() {
    document.getElementById("Loading").style.display = "none";
    body.style.display = "block";
}

function pageReSize() {
    pageContainCheck();
    coverReSize();
}


function pageContainCheck() {
    if (html.clientHeight < 300 || html.clientWidth < 300) {
        sizeAlert.style.display = "block";
        body.style.display = "none";
    } else {
        sizeAlert.style.display = "none";
        body.style.display = "block";
    }
}

function coverReSize() {
    document.getElementById("Cover").style.height = html.clientHeight + "px";
}