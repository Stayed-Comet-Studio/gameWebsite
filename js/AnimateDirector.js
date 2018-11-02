/*Stayed Comet Studio Copyright 2018
  ZhangXiurui
  This is a animate manage js of whole page.
  Set this file before non-bootstrap-js.
 */

function Animate(OBJECT,TARGET,TIME,DELAY,ACTION) {
    return {
        obj: OBJECT,
        time: TIME,
        action: ACTION,
        delay: DELAY,
        target: TARGET,
        play: function (Level) {
            this.obj.style.animation = this.time + 's ' + this.action;
            this.obj.style.webkitAnimation = this.time + 's ' + this.action;
            this.obj.style.animationDelay = Level + this.delay +'s';
            this.obj.style.webkitAnimationDelay = Level + this.delay  +'s';
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
        mode: false,
        target: TARGET,
        play: function () {
            if (DISPLAY) this.obj.style.display = 'block';
            else this.obj.style.display = 'none';
        }
    }
}

function AnimateList(NAME) {
    return {
        list: [],
        name: NAME,
        listTop: 0,

        play: function () {
            let Delay = 0;
            for (let j = 0; j < this.listTop ; j++) {
                let inTurn = this.list[j];
                inTurn.play(Delay);
                Delay += inTurn.time;
            }
        },

        add: function (ANIMATE) {
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