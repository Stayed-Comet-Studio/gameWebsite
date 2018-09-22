window.onload = pageOnLoad;
window.onresize = pageReSize;
let html = document.documentElement;
let body = document.getElementById("context");
let sizeAlert = document.getElementById("sizeAlerts");

function pageOnLoad() {
    pageContainCheck();
    coverReSize();
    checkBrowserLevel() && blockBrowser();
    document.getElementById("Loading").style.display = "none";
    body.style.display = "block";

}

function pageReSize() {
    pageContainCheck();
    coverReSize();
}

function blockBrowser() {
    body.style.display = "none";
    document.getElementById("browserAlerts").style.display = "block";
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

function checkBrowserLevel() {
    let browser = navigator.appName;
    let b_version = navigator.appVersion;
    let version = parseFloat(b_version);
    if ((browser == "Netscape" ||
        browser == "Microsoft Internet Explorer" ||
        browser == "Mozilla") && (version > 4))
        return false;
    return true;
}

function coverReSize() {
    document.getElementById("Cover").style.height = html.clientHeight + "px";
}