window.onload = pageOnLoad;
window.onresize = pageReSize;
let html = document.documentElement;
let body = document.getElementById("context");
let sizeAlert = document.getElementById("sizeAlerts");
let browserAlerts = document.getElementById("browserAlerts");
let browserStatus = getExplore();

function pageOnLoad() {
    pageContainCheck();
    coverReSize();
    document.getElementById("Loading").style.display = "none";
    body.style.display = "block";
    //(!browserStatus) && blockBrowser();
}

function pageReSize() {
    pageContainCheck();
    coverReSize();
}

function blockBrowser() {
    body.style.display = "none";
    browserAlerts.style.display = "block";
}

function pageContainCheck() {
    if (html.clientHeight < 300 || html.clientWidth < 300) {
        sizeAlert.style.display = "block";
        body.style.display = "none";
    } else {
        sizeAlert.style.display = "none";
        body.style.display = "block";
    }
    // (!browserStatus) && blockBrowser(); //Should be rebuild.
}

function getExplore() {
    let Sys = {};
    let ua = navigator.userAgent.toLowerCase();
    let s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
        (s = ua.match(/msie ([\d\.]+)/)) ? Sys.ie = s[1] :
            (s = ua.match(/edge\/([\d\.]+)/)) ? Sys.edge = s[1] :
                (s = ua.match(/firefox\/([\d\.]+)/)) ? Sys.firefox = s[1] :
                    (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? Sys.opera = s[1] :
                        (s = ua.match(/chrome\/([\d\.]+)/)) ? Sys.chrome = s[1] :
                            (s = ua.match(/version\/([\d\.]+).*safari/)) ? Sys.safari = s[1] : 0;
    //If Browser's version is right,return true.
    if (Sys.ie < 9) {
        alert(Sys.ie);
        return (false);
    }
    if (Sys.edge) return (true);
    if (Sys.firefox < 53) {
        alert(Sys.firefox);
        return (false);
    }
    if (Sys.chrome < 54) {
        alert(Sys.chrome);
        return (false);
    }
    if (Sys.opera < 37) {
        alert(Sys.opera);
        return (false);
    }
    if (Sys.safari < 4) {
        alert(Sys.safari);
        return (false);
    }
    return true;
}

function coverReSize() {
    document.getElementById("Cover").style.height = html.clientHeight + "px";
}