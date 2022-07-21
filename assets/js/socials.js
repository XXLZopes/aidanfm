function detectChrome () {
    if (navigator.userAgent.indexOf('Chrome') > -1 || navigator.userAgent.indexOf('CriOS') > -1) {
        return true;
    }
    return false;
}


const socials1El = document.querySelector('#socials1')
const socials2El = document.querySelector('#socials2')

socials1El.style.opacity = 1.0;
socials2El.style.opacity = 0.0;

scrollYArray = [window.scrollY]

function changeOpacity (domEl, domEl2, percent, percent2) {
let maxHeight = document.documentElement.clientHeight;
let conversion = 1.0 / (maxHeight * percent);
let conversion2 = 1.0 / (maxHeight * percent2);
let opacityFloat = parseFloat(domEl.style.opacity);
let opacityFloat2 = parseFloat(domEl2.style.opacity);

scrollYArray.push(window.scrollY);
let difference = scrollYArray[0] - scrollYArray[1];
domEl.style.opacity = (opacityFloat + (difference * conversion))
domEl2.style.opacity = (opacityFloat2 - (difference * (conversion2 || conversion)))

scrollYArray.shift()
if (window.scrollY == 0) {
    domEl.style.opacity = 1;
    domEl2.style.opacity = 0;
}
console.log(domEl.style.opacity)
}

window.addEventListener("scroll", function () {
    changeOpacity(socials1El, socials2El, .07, .18);
})

detectChrome() ? socials1El.style.bottom = '50%' : socials1El.style.bottom = '10%';