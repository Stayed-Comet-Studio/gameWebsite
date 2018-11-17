DebugMod = true;

//let ADo = AnimateDirector; //ShortCode of AnimateDirector
let html = document.documentElement;
let body = getObjectByID('context');
let Info = getObjectByID("Info-Group");

window.onload = function pageOnLoad() {
    coverReSize();
    //Animations
    let LoadingAnimate = 'FadeOut 0.4s';
    getObjectByID("Loading").style.animation = LoadingAnimate;
    getObjectByID("Loading").style.webkitAnimation = LoadingAnimate;
    body.style.display = 'block';
    setTimeout('getObjectByID("Loading").style.display = \'none\'', 380)
    //TODO: This part is waiting to be completed.
    /*
    setTimeout(function () {
        getObjectByID("Loading").style.display = 'none';
        getObjectByID("Animates").style.display = 'block';
        getObjectByID("Animates").style.webkitAnimation = 'FadeIn 0.5s ease-in-out';
        getObjectByID("Animates").style.animation = 'FadeIn 0.5s ease-in-out';
    }, 380);*/
};

window.onscroll = function PageScroll() {

};

function showSection(Obj) {
    body.style.animation = body.style.webkitAnimation = 'FadeOut 0.4s';
    Obj.style.animation = Obj.style.webkitAnimation = Info.style.webkitAnimation = Info.style.animation = 'FadeIn 0.4s';
    Obj.style.display = Info.style.display = 'block';
    setTimeout(function () {
        body.style.display = 'none';
    }, 380);
}

function swtichSectionItem(Obj, SectionObj, TargetObj) {
    let n = SectionObj.getElementsByTagName('article');
    let p = Obj.parentNode.getElementsByTagName('a');
    for (let i = 0; i < n.length; i++)
        n[i].style.display = 'none';
    for (let i = 0; i < p.length; i++)
        p[i].className = '';
    TargetObj.style.display = 'block';
    Obj.className = 'onSelect';
}

function returnMainland(Obj) {
    Obj.style.animation = Obj.style.webkitAnimation = Info.style.webkitAnimation = Info.style.animation = 'FadeOut 0.4s';
    body.style.animation = body.style.webkitAnimation = 'FadeIn 0.4s';
    body.style.display = 'block';
    setTimeout(function () {
        Obj.style.display = Info.style.display = 'none';
    }, 380);
}

window.onresize = function pageReSize() {
    //pageContainCheck();
    coverReSize();
};

getObjectByID('skipAnimate').onclick = function () {
    removeBootAnimation();
};

function removeBootAnimation() {
    let SkipAnimate = 'FadeOut 0.4s';
    getObjectByID("Animates").style.animation = SkipAnimate;
    getObjectByID("Animates").style.webkitAnimation = SkipAnimate;
    setTimeout('getObjectByID("Animates").style.display = \'none\';' +
        'body.style.animation = body.style.webkitAnimation = \'FadeIn 0.5s ease-in-out\';' +
        'body.style.display = \'block\'', 380);
}

function coverReSize() {
    let hei = html.clientHeight + "px";
    getObjectByID("Cover").style.height = hei;
    getObjectByID("Animates").style.height = hei;
}