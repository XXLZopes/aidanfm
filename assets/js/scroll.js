const backgroundContainerEl = document.querySelector('#background-con');

const imgConEl = document.querySelector('.img-con');

backgroundContainerEl.style.height = document.documentElement.clientHeight + 'px';
backgroundContainerEl.style.width = '100.0vw'

let scrollArray = [window.scrollY]

let currentHeight = document.documentElement.clientHeight;

function raiseCurtain(curtain) {
    scrollArray.push(window.scrollY)
    let changeInHeight = scrollArray[0] - scrollArray[1];
    let curtainHeight = parseInt(curtain.style.height);
    
    curtain.style.height = curtainHeight + changeInHeight + 'px';
    scrollArray.shift();

    if (window.scrollY <= 0) {
        scrollArray = [0];
        curtain.style.height = document.documentElement.clientHeight + 'px';
    }

    if (window.scrollY >= window.innerHeight) {
        curtain.style.height = 0;
    }
}

function adjustHeight(curtain) {
    let curtainHeight = parseInt(curtain.style.height);
    let maxHeight = document.documentElement.clientHeight;
    let heightDifference = maxHeight - currentHeight;
    let adjustedHeight =  curtainHeight + heightDifference;
    curtain.style.height = adjustedHeight + 'px'


}

window.addEventListener("scroll", function () {
    raiseCurtain(backgroundContainerEl);
}, false);

// window.addEventListener("resize", function () {
//     adjustHeight(backgroundContainerEl)
// }, false)