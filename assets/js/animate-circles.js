const circleEl4 = document.getElementById('circle4');
const circle1El4 = document.getElementById('circle14');

class CircleAnimate {
    constructor (circleEl, maxSize, minSize, maxY, minY, maxX, minX) {
        this.circleEl = circleEl;
        this.maxSize = maxSize || 0;
        this.minSize = minSize  || 0;
        this.maxY = maxY  || 0;
        this.minY = minY || 0;
        this.maxX = maxX || 0;
        this.minX = minX || 0;
        this.grow = true;
        this.moveDown = true;
        this.moveLeft = true;
    }
}
let circleAC0 = new CircleAnimate(document.getElementById('circle0'), 20, 15);
let circleAC0b = new CircleAnimate(document.getElementById('circle10'), 20, 15);

let circleAC3 = new CircleAnimate(document.getElementById('circle3'), null, null, 470, 350);
let circleAC3b  = new CircleAnimate(document.getElementById('circle13'), null, null, 470, 350);

function changeSize(circle, speed) {
    let circleEl = circle.circleEl;
    let maxSize = circle.maxSize;
    let minSize = circle.minSize;
    let grow = circle.grow

    circleSize = parseFloat(circleEl.style.height);

    if (circleSize <= maxSize && grow) {
        circleEl.style.height = circleSize + speed + 'vw'
        circleEl.style.width = circleSize + speed + 'vw'
        if (parseFloat(circleEl.style.height) >= maxSize) {
            circle.grow = false
        }
    }
    else if (circleSize >= minSize && !grow) {
        circleEl.style.height = circleSize - speed + 'vw'
        circleEl.style.width = circleSize - speed + 'vw'
        if (parseFloat(circleEl.style.height) <= minSize) {
            circle.grow = true
        }
    }
}

console.log(circleAC3.maxY)

function moveY(circle, speed) {

    let circleEl = circle.circleEl;
    let maxY = circle.maxY;
    let minY = circle.minY;
    let circleY = parseFloat(circleEl.style.top);
    let moveDown = circle.moveDown;

    if (circleY <= maxY && moveDown) {
        circleEl.style.top = circleY + speed + 'px'
        if (parseFloat(circleEl.style.top) >= maxY) {
            circle.moveDown = false
        }
    }
    else if (circleY >= minY && !moveDown) {
        circleEl.style.top = circleY - speed + 'px'
        if (parseFloat(circleEl.style.top) <= minY) {
            circle.moveDown = true
        }
    }
}

function moveX(circleEl, maxX, minX, speed) {
    circleX = parseFloat(circleEl.style.right);

    if (circleX <= maxX && this.moveLeft) {
        circleEl.style.right = circleX + speed + 'px'
        if (parseFloat(circleEl.style.right) >= maxX) {
            this.moveLeft = false
        }
    }
    else if (circleX >= minX && !this.moveLeft) {
        circleEl.style.right = circleX - speed + 'px'
        if (parseFloat(circleEl.style.right) <= minX) {
            this.moveLeft = true
        }
    }
}


setInterval(function () {changeSize(circleAC0, .02)}, 10);
setInterval(function () {changeSize(circleAC0b, .02)}, 10);

setInterval(function () {moveY(circleAC3, .15)}, 10);
setInterval(function () {moveY(circleAC3b, .15)}, 10);

setInterval(function () {moveX(circleEl4, 100, 0, .25)}, 10);
setInterval(function () {moveX(circle1El4, 100, 0, .25)}, 10);