DebugMod = true;

//let ADo = AnimateDirector; //ShortCode of AnimateDirector
let html = document.documentElement;
let body = getObjectByID('context');

window.onload = function pageOnLoad() {
    //pageContainCheck();
    coverReSize();
    //Animations
    let LoadingAnimate = 'FadeOut 0.4s';
    getObjectByID("Loading").style.animation = LoadingAnimate;
    getObjectByID("Loading").style.webkitAnimation = LoadingAnimate;
    setTimeout('getObjectByID("Loading").style.display = \'none\';' +
        'getObjectByID("Animates").style.animation = \'FadeIn 0.5s ease-in-out\';' +
        'getObjectByID("Animates").style.webkitAnimation = \'FadeIn 0.5s ease-in-out\';' +
        'getObjectByID("Animates").style.display = \'block\'', 380);
};

window.onscroll = function PageScroll() {

};

window.onresize = function pageReSize() {
    //pageContainCheck();
    coverReSize();
};

getObjectByID("playAnimate").onclick = function () {
    let ShowinAnimate = 'FadeIn 0.3s';
    let ShowoutAnimate = 'FadeOut 0.3s';
    let obj = getObjectByID("nonAnimate");
    obj.style.Animation = ShowinAnimate;
    obj.style.webkitAnimation = ShowinAnimate;
    obj.style.display = 'block';
    setTimeout('getObjectByID("nonAnimate").style.Animation=\'' + ShowoutAnimate + '\';' +
        'getObjectByID("nonAnimate").style.webkitAnimation=\'' + ShowoutAnimate + '\';', 5000);
    setTimeout('getObjectByID("nonAnimate").style.display=\'none\'', 5290);
};

getObjectByID("nonAnimate").onclick = function () {
    let ShowoutAnimate = 'FadeOut 0.3s';
    let obj = getObjectByID("nonAnimate");
    obj.style.webkitAnimation = ShowoutAnimate;
    obj.style.animation = ShowoutAnimate;
    setTimeout('getObjectByID("nonAnimate").style.display = \'none\'', 290);
};

getObjectByID('skipAnimate').onclick = function () {
    let SkipAnimate = 'FadeOut 0.4s';
    getObjectByID("Animates").style.animation = SkipAnimate;
    getObjectByID("Animates").style.webkitAnimation = SkipAnimate;
    setTimeout('getObjectByID("Animates").style.display = \'none\';' +
        'body.style.animation = \'FadeIn 0.5s ease-in-out\';' +
        'body.style.webkitAnimation = \'FadeIn 0.5s ease-in-out\';' +
        'body.style.display = \'block\'', 380);
};

function coverReSize() {
    let hei = html.clientHeight + "px";
    getObjectByID("Cover").style.height = hei;
    getObjectByID("Animates").style.height = hei;
}