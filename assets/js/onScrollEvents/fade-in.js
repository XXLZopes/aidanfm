function getElements(className) {
    return document.querySelectorAll(className);
}

function setInitialOpacity(elements, opacity) {
    elements.forEach((element) => {
        element.style.opacity = opacity;
    })
}

scrollArrayY = [window.scrollY];
function setOpacity(elements, pageOffSet, direction) {
    let window_height = document.documentElement.clientHeight;

    scrollArrayY.push(window.scrollY);

    let difference = scrollArrayY[0] - scrollArrayY[1];

  
    scrollArrayY.shift();

    change_in_opacity = (1/window_height * difference) * direction;

    elements.forEach((element) => {
        if (window.scrollY == window_height) {
            element.style.opacity = 0;
        } else if (window.scrollY == 0) {
            element.style.opacity = 1;
        } else {
            element.style.opacity = parseFloat(element.style.opacity) + change_in_opacity * pageOffSet;
        }
    });

}

let circlesElArray = getElements('.circle');

setInitialOpacity(circlesElArray, 1);


let testEl = document.querySelectorAll('.fa-circle-envelope');

window.addEventListener("scroll", ()=> {
    // console.log(testEl[0].getBoundingClientRect().top);
    setOpacity(circlesElArray, 1, 1);
    console.log('gang');

});
  