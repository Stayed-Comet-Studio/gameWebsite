window.onload = pageOnLoad;
window.onresize = pageReSize;
let html = document.documentElement;
let body = document.getElementById("context");
let sizeAlert = document.getElementById("sizeAlerts");

function pageOnLoad() {
    pageContainCheck();
    coverReSize();
    body.style.display = "block";
}

function pageReSize() {
    pageContainCheck();
    coverReSize();
}

function pageContainCheck() {
    if (html.clientHeight < 300 || html.clientWidth < 280) {
        sizeAlert.style.display = "block";
        body.style.display = "none";
    } else {
        sizeAlert.style.display = "none";
        body.style.display = "block";
    }
}

function coverReSize() {
    //Because we using footer as the Cover's footer,
    //if we rebuild our page,please remove this.
    let Height = html.clientHeight;
    let footerHeight = document.getElementById("footer").clientHeight;
    document.getElementById("Cover").style.height = (Height - footerHeight) + "px";
}