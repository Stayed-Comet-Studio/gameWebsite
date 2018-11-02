DebugMod = true;

let html = document.documentElement;
let body = getObjectByID('context');
let sizeAlert = getObjectByID('sizeAlerts');

window.onload = function pageOnLoad() {
    //pageContainCheck();
    coverReSize();
    //Animation Setup
    AnimateDirect.addAnimateList(AnimateList('LOADING'));
    AnimateDirect.addAnimate('LOADING',Animate(getObjectByID('Loading'),'Loading animate',0.5,0,'FadeOut'));
    AnimateDirect.addAnimate('LOADING',Animate(body,'Body animate',0.8,0,'FadeIn ease-in-out'));
    AnimateDirect.addAnimate('LOADING',DisplayAction(body,'bodyOn',true));
    AnimateDirect.addAnimate('LOADING',DisplayAction(getObjectByID('Loading'),'loadingOff',false));
    AnimateDirect.playAnimateList('LOADING');
};

window.onresize = function pageReSize() {
    //pageContainCheck();
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