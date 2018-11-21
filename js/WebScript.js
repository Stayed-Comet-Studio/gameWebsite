DebugMod = true;

//let ADo = AnimateDirector; //ShortCode of AnimateDirector
let html = document.documentElement;
let body = getObjectByID('context');

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

window.onresize = function pageReSize() {
    coverReSize();
};

function coverReSize() {
    let hei = html.clientHeight + "px";
    getObjectByID("Cover").style.height = hei;
    getObjectByID("Animates").style.height = hei;
}


// Selection Object Installing Factory
let Info = getObjectByID("Info-Group");// Using for getSelectionObject();
function getSelectionObject(root,node,item) {
    let ITEM = item.getElementsByTagName('article');
    let NODE = node.getElementsByTagName('a');
    return {
        _root: root,
        _item: ITEM,
        _node: NODE,
        inTo: function () {
            body.style.animation = body.style.webkitAnimation = 'FadeOut 0.4s';
            this._root.style.animation = this._root.style.webkitAnimation = Info.style.webkitAnimation = Info.style.animation = 'FadeIn 0.4s';
            this._root.style.display = Info.style.display = 'block';
            setTimeout(function () {
                body.style.display = 'none';
            }, 380);
        },
        returnBack: function () {
            this._root.style.animation = this._root.style.webkitAnimation = Info.style.webkitAnimation = Info.style.animation = 'FadeOut 0.4s';
            body.style.animation = body.style.webkitAnimation = 'FadeIn 0.4s';
            body.style.display = 'block';
            let This = this._root;
            setTimeout(function () {
                This.style.display = Info.style.display = 'none';
            }, 380);
        },
        clearItem: function () {
            for (let i = 0; i < this._item.length; i++)
                this._item[i].style.display = 'none';
        },
        clearNode: function () {
            for (let i = 0; i < this._node.length; i++)
                this._node[i].className = '';
        },
        switchItem: function (Obj,Target) {
            // If you use it,you could let 'this' to fill 'Obj'.
            this.clearItem();
            this.clearNode();
            getObjectByID(Target).style.display = 'block';
            Obj.className = 'onSelect';
        }
    };
}


// Selections
let Character = getSelectionObject(
    getObjectByID('character-info'),
    getObjectByID('character-node'),
    getObjectByID('character-item'));
