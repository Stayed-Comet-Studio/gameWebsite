DebugMod = true;

//let ADo = AnimateDirector; //ShortCode of AnimateDirector
let Status = {
    html: document.documentElement,
    body: getObjectByID('context'),
};

window.onload = function pageOnLoad() {
    coverReSize();
    //Animations
    let LoadingAnimate = 'FadeOut 0.4s';
    getObjectByID("Loading").style.animation = LoadingAnimate;
    getObjectByID("Loading").style.webkitAnimation = LoadingAnimate;
    Status.body.style.display = 'block';
    setTimeout(function () {
        getObjectByID("Loading").style.display = 'none';
        Status.topElements = Status.body;
    }, 380)
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
    let hei = Status.html.clientHeight + "px";
    getObjectByID("Cover").style.height = hei;
    getObjectByID("Animates").style.height = hei;
    Info.style.minHeight = hei;
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
            Status.body.style.animation = Status.body.style.webkitAnimation = 'FadeOut 0.4s';
            this._root.style.animation = this._root.style.webkitAnimation = Info.style.webkitAnimation = Info.style.animation = 'LeftIn ease-in-out 0.4s';
            this._root.style.display = Info.style.display = 'block';
            Status.topElements = this._root;
            setTimeout(function () {
                Status.body.style.display = 'none';
            }, 390);
        },
        returnBack: function () {
            this._root.style.animation = this._root.style.webkitAnimation = Info.style.webkitAnimation = Info.style.animation = 'LeftOut ease-in-out 0.4s';
            Status.body.style.animation = Status.body.style.webkitAnimation = 'FadeIn 0.4s';
            Status.body.style.display = 'block';
            setTimeout(function () {
                Status.topElements.style.display = Info.style.display = 'none';
                Status.topElements = Status.body;
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


// Selections Objects
let Setting = getSelectionObject(
    getObjectByID('settings-info'),
    getObjectByID('settings-node'),
    getObjectByID('settings-item')
);

let Story = getSelectionObject(
    getObjectByID('story-info'),
    getObjectByID('story-node'),
    getObjectByID('story-item')
);

let Character = getSelectionObject(
    getObjectByID('character-info'),
    getObjectByID('character-node'),
    getObjectByID('character-item'));
