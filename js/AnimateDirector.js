/*Stayed Comet Studio Copyright 2018
  ZhangXiurui
  This is a animate manage js of whole page.
  Set this file before non-bootstrap-js.
 */


/*
    Introduction of AnimateDirector:
        We only have ONE director to command this page's animation.
        So we use this to direct all the animation in this page.
 */
let AnimateDirector = {
    _FreshTime: 200,
    _update: [],

    play: function (Animation) {
        if (Animation.Type === 'List') {
            if (Animation.getFreshTime() !== this._FreshTime) {
                Animation.setTimeTable();
            }
        }
        Animation.play();
    },
    stop: function (Animation) {
        Animation.stop();
    },
    setFreshTime: function (FT) {
        if (FT <= 0) this._FreshTime = 200;
        else this._FreshTime = FT;
    },
    getFreshTime: function () {
        return this._FreshTime;
    },
    addUpdate: function (Obj) {
        for (let i = 0; ; i++) {
            if (this._update[i] !== null) continue;
            this._update[i] = Obj;
            return i;
        }
    },
    getUpdate: function (Code) {
        return this._update[Code];
    },
    removeUpdate: function (Code) {
        this._update[Code] = null;
    }
};


/*
    Introduction of AnimateList:
        Is consist of a group animations with an order.
        Needs AnimateDirect to play this.
 */
function AnimationList() {
    return {
        _FreshTime: AnimateDirector.getFreshTime(),
        _updateTime: function () {
            return this._FreshTime / 1000
        },

        Type: 'List',
        getFreshTime: function () {
            return this._FreshTime;
        },
        //Basic
        _updateCode: 0,
        _Timer: null,
        _Animation: [],
        _AnimationMode: [],
        _Keyframe: [],
        _NowFrame: 0,
        _NextKeyframe: 0,
        _OnPlaying: null,

        _update: function () {
            alert('update');
            // Enter a frame
            // Ending update() check
            if (this._NowFrame > this._Keyframe[this._Keyframe.length - 1]) {
                alert('small');
                this._removeTimer();
                return;
            }
            // Animate loop
            for (let i = this._NextKeyframe; i < this._Keyframe.length; i++) {
                alert(i);
                // If this frame is passed
                if (this._NowFrame > this._Keyframe[i]) break;
                // Keyframe check
                if (this._NowFrame === this._Keyframe[i]) {
                    // Play animate
                    this._Animation[i].play();
                    this._OnPlaying = this._Animation[i];
                    this._NextKeyframe = this._Keyframe[i + 1];
                }
            }
            // Point to next frame
            this._NowFrame++;
        },
        _setTimer: function () {
            this._updateCode = AnimateDirector.addUpdate(this._update());
            let FT = this._FreshTime;
            this._Timer = setTimeout("AnimateDirector.getUpdate(" + this._updateCode + ")", FT);
        },
        _removeTimer: function () {
            clearTimeout(this._Timer);
            AnimateDirector.removeUpdate(this._updateCode);
            this._NowFrame = this._NextKeyframe = 0;
            this._Timer = null;
        },
        setTimeTable() {
            let FLT = this._updateTime();
            let sumFrame = 0;
            let lastFrame = 0;

            for (let i = 0; i < this._Animation.length; i++) {
                let thisFrame = (this._Animation[i].time + this._Animation[i].delay) / FLT;
                let mode = this._AnimationMode[i];

                switch (mode) {
                    case 1:
                        this._Keyframe[i] = sumFrame - lastFrame;
                        break;
                    case 0:
                        this._Keyframe[i] = sumFrame;
                        break;
                }

                lastFrame = thisFrame;
                sumFrame += thisFrame;
            }
        },
        //Commands

        add: function (Animate, Mode) {
            let top = this._Animation.length;
            this._Animation[top] = Animate;

            switch (Mode) {
                case "after":// Set in 0 mode
                case "After":
                    this._AnimationMode[top] = 0;
                    break;
                case "with":// Set in 1 mode
                case "With":
                    this._AnimationMode[top] = 1;
                    break
            }

            this.setTimeTable();
        },
        remove: function () {
            let newArr1 = [];
            let newArr2 = [];
            for (let i = 0; i < this._Animation.length - 1; i++) {
                newArr1[i] = this._Animation[i];
                newArr2[i] = this._AnimationMode[i];
            }
            this._Animation = newArr1;
            this._AnimationMode = newArr2;
        },
        play: function () {
            alert('into');
            this._setTimer();
        },
        stop: function () {
            alert('out');
            this._removeTimer();
            this._OnPlaying.stop();
        },
        getUpdateCode: function () {
            return this._updateCode;
        }
    };
    //_OBJ.setTimeTable();
    //return _OBJ;
}


/*
    Introduction of originAnimate:
        This is the basic animate object of other kinds of animate object,
        Can't be installed,only to be extended.
 */
function originAnimate(Obj, Time, Delay) {
    return {
        obj: Obj,
        time: Time,
        delay: Delay,
        play: null,
        stop: null,
        getType: null,
    };
}

//Costumes Animate Weights

function AAlert(Mes) {
    let _OBJ = originAnimate(null, 0, 0);
    _OBJ.Mes = Mes;
    _OBJ.Type = 'Alert Message';
    _OBJ.play = function () {
        alert(this.Mes)
    };
    _OBJ.stop = function () {
        alert('Animate Stopped.')
    };

    return _OBJ;
}

/*

Last Version

function Animate(OBJECT,TARGET,TIME,DELAY,ACTION) {
    return {
        obj: OBJECT,
        time: TIME,
        action: ACTION,
        delay: DELAY,
        target: TARGET,
        play: function () {
            this.obj.style.animation = this.time + 's ' + this.action;
            this.obj.style.webkitAnimation = this.time + 's ' + this.action;
            this.obj.style.animationDelay = + this.delay +'s';
            this.obj.style.webkitAnimationDelay = this.delay  +'s';
        },
        stop: function () {
            this.obj.style.animation = ' ';
            this.obj.style.webkitAnimation = ' ';
            this.obj.style.animationDelay = ' ';
            this.obj.style.webkitAnimationDelay = ' ';
        }
    };
}

function DisplayAction(OBJECT,TARGET,DISPLAY) {
    return {
        obj: OBJECT,
        mode: DISPLAY,
        target: TARGET,
        play: function () {
            if (this.mode) this.obj.style.display = 'block';
            else this.obj.style.display = 'none';
        }
    }
}

function AnimateList(NAME) {
    return {
        list: [],
        timeTable: [],
        name: NAME,
        listTop: 0,

        play: function () {
            for (let j = 0; j < this.listTop ; j++) {
                let inTurn = this.list[j];
                inTurn.play();
            }
        },

        add: function (ANIMATE,SITUATION,TIME) {
            this.list[this.listTop] = ANIMATE;
            this.listTop++;
        },

        remove: function (TARGET) {
            let hit = false;
            let newList = [];
            let i = 0;
            for (let j = 0; j < this.listTop ; j++) {
                let inTurn = this.list[j];
                if (inTurn.target === TARGET) {
                    hit = true;
                    continue;
                }
                newList[i] = inTurn;
                i++
            }

            if (hit){
                this.list = newList;
                this.listTop--;
                return true;
            }
            return false;
        },

        stop: function () {
            for (let j = 0; j < this.listTop ; j++) {
                let inTurn = this.list[j];
                inTurn.stop();
            }
        },

        replay: function () {
            let Delay = 0;
            for (let j = 0; j < this.listTop ; j++) {
                let inTurn = this.list[j];
                inTurn.stop();
                inTurn.play(Delay);
                Delay += inTurn.time;
            }
        }
    };
}

let AnimateDirect = {
    AnimateList: [],
    listTop: 0,

    getAnimateList: function (NAME) {
        for (let i = 0 ; i < this.listTop ; i++) {
            let inTurn = this.AnimateList[i];
            if (inTurn.name === NAME) return inTurn;
        }
        return false;
    },

    addAnimate: function (NAME,ANIMATE) {
        this.getAnimateList(NAME).add(ANIMATE);
    },

    removeAnimate: function (NAME,TARGET) {
        this.getAnimateList(NAME).remove(TARGET);
    },

    addAnimateList: function (LIST) {
        this.AnimateList[this.listTop] = LIST;
        this.listTop++;
    },

    playAnimateList: function (NAME) {
        this.getAnimateList(NAME).play();
    },

    replayAnimateList: function (NAME) {
        this.getAnimateList(NAME).replay();
    },

    stopAnimateList: function (NAME) {
        this.getAnimateList(NAME).stop();
    },

    remveAnimateList: function (NAME) {
        let newList = [];
        let i = 0;
        for (let j = 0; j < this.listTop ; j++) {
            let inTurn = this.AnimateList[j];
            if (inTurn.name === NAME) continue;
            newList[i] = inTurn;
            i++;
        }
        return newList;
    }

};

*/