const circleEl0 = document.getElementById('circle0');
const circle1El0 = document.getElementById('circle10');

const circleEl3 = document.getElementById('circle3');
const circle1El3 = document.getElementById('circle13');

const circleEl4 = document.getElementById('circle4');
const circle1El4 = document.getElementById('circle14');

let grow = true;
let moveDown = true;
let moveLeft = true;
function changeSize(circleEl, maxSize, minSize, speed) {
    circleSize = parseFloat(circleEl.style.height);

    if (circleSize <= maxSize && this.grow) {
        circleEl.style.height = circleSize + speed + 'vw'
        circleEl.style.width = circleSize + speed + 'vw'
        if (parseFloat(circleEl.style.height) >= maxSize) {
            this.grow = false
        }
    }
    else if (circleSize >= minSize && !this.grow) {
        circleEl.style.height = circleSize - speed + 'vw'
        circleEl.style.width = circleSize - speed + 'vw'
        if (parseFloat(circleEl.style.height) <= minSize) {
            this.grow = true
        }
    }
}

function moveY(circleEl, maxY, minY, speed) {
    circleY = parseFloat(circleEl.style.top);

    if (circleY <= maxY && this.moveDown) {
        circleEl.style.top = circleY + speed + 'px'
        if (parseFloat(circleEl.style.top) >= maxY) {
            this.moveDown = false
        }
    }
    else if (circleY >= minY && !this.moveDown) {
        circleEl.style.top = circleY - speed + 'px'
        if (parseFloat(circleEl.style.top) <= minY) {
            this.moveDown = true
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


setInterval(function () {changeSize(circleEl0, 20, 15, .02)}, 10);
setInterval(function () {changeSize(circle1El0, 20, 15, .02)}, 10);

setInterval(function () {moveY(circleEl3, 470, 350, .15)}, 10);
setInterval(function () {moveY(circle1El3, 470, 350, .15)}, 10);

setInterval(function () {moveX(circleEl4, 100, 0, .25)}, 10);
setInterval(function () {moveX(circle1El4, 100, 0, .25)}, 10);