const circleEl4 = document.getElementById('circle4');
const circle1El4 = document.getElementById('circle14');

class CircleAnimate {
    constructor (circleEl) {
        this.circleEl = circleEl;
        // this.maxSize = maxSize || 0;
        // this.minSize = minSize  || 0;
        // this.maxY = maxY  || 0;
        // this.minY = minY || 0;
        // this.maxX = maxX || 0;
        // this.minX = minX || 0;
        this.grow = true;
        this.moveDown = true;
        this.moveLeft = true;
    }
    setMaxSize (maxSize) {
        this.maxSize = maxSize
    }
    setMinSize (minSize) {
        this.minSize = minSize
    }
    setMaxY (maxY) {
        this.maxY = maxY
    }
    setMinY (minY) {
        this.minY = minY
    }
    setMaxX (maxX) {
        this.maxX = maxX
    }
    setMinX (minX) {
        this.minX = minX
    }
}
let circleAC0 = new CircleAnimate(document.getElementById('circle0'));
let circleAC0b = new CircleAnimate(document.getElementById('circle10'));

let circleAC3 = new CircleAnimate(document.getElementById('circle3'));
let circleAC3b  = new CircleAnimate(document.getElementById('circle13'));

let circleAC4 = new CircleAnimate(document.getElementById('circle4'));
let circleAC4b  = new CircleAnimate(document.getElementById('circle14'));

function changeSize(circle, circle2, max, min, speed) {
    let circleEl = circle.circleEl;
    let circleEl2 = circle2.circleEl
    circle.setMaxSize(max);
    circle.setMinSize(min);
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

    circleEl2.style.height = circleEl.style.height;
    circleEl2.style.width = circleEl.style.width;
}

function moveY(circle, circle2, max, min, speed) {

    let circleEl = circle.circleEl;
    let circleEl2 = circle2.circleEl;

    circle.setMaxY(max);
    circle.setMinY(min)

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
    circleEl2.style.top = circleEl.style.top;
}

function moveX(circle, circle2, max, min, speed) {

    let circleEl = circle.circleEl
    let circleEl2 = circle2.circleEl;

    circleX = parseFloat(circleEl.style.right);
    circle.setMaxX(max);
    circle.setMinX(min);
    maxX = circle.maxX;
    minX = circle.minX;

    if (circleX <= maxX && circle.moveLeft) {
        circleEl.style.right = circleX + speed + 'px'
        if (parseFloat(circleEl.style.right) >= maxX) {
            circle.moveLeft = false
        }
    }
    else if (circleX >= minX && !circle.moveLeft) {
        circleEl.style.right = circleX - speed + 'px'
        if (parseFloat(circleEl.style.right) <= minX) {
            circle.moveLeft = true
        }
    }
    circleEl2.style.right = circleEl.style.right;
}


setInterval(function () {changeSize(circleAC0, circleAC0b, 20, 15, .02)}, 10);

setInterval(function () {moveY(circleAC3, circleAC3b, 470, 350, .15)}, 10);

setInterval(function () {moveX(circleAC4, circleAC4b, 100, 0, .25)}, 10);
