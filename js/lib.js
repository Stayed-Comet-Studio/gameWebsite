/*Stayed Comet Studio Copyright 2018
  ZhangXiurui
  This is a lib of this page.
  Set this file before non-bootstrap-js.
 */
let DebugMod = false;

function isDOMInScreen (Obj) {
    let top = Obj.offsetTop;
    let windowTop = window.innerHeight;
    let scrollTops = document.documentElement.scrollTop;
    return ( windowTop + scrollTops ) > top;
}

function getObjectByID (ID) {
    let Object = document.getElementById(ID);
    if (DebugMod) {
        if (Object == null)  alert('Object "' + ID + '" Not Found!');
    }
    return Object;
}

function getObjectByClass (CLASS) {
    let Object = document.getElementsByClassName(CLASS);
    if (DebugMod) {
        let i = 0;
        if (function () {
            for (; i < Object.length ; i++) {
                if (Object[i] == null) return false;
            }
            return true;
        })  alert('Object "' + CLASS + '[' + i + ']" Not Found!');
    }
    return Object;
}

// noinspection JSDuplicatedDeclaration
function getObjectByClass (CLASS,LEVEL) {
    let Object = document.getElementsByClassName(CLASS);
    if (DebugMod) {
        if (Object[LEVEL] == null)
            alert('Object "' + CLASS + '[' + LEVEL + ']" Not Found!');
    }
    return Object[LEVEL];
}