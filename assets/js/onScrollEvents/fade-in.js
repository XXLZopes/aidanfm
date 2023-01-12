function getElements(className) {
    return document.querySelectorAll(className);
}
function setInitialOpacity(elements) {
    elements.forEach((element) => {
        element.style.opacity = 1;
    })
}


scrollArrayY = [window.scrollY];

function setOpacity(elements) {
    let window_height = document.documentElement.clientHeight;

    scrollArrayY.push(window.scrollY);

    let difference = scrollArrayY[0] - scrollArrayY[1];

  
    scrollArrayY.shift();

    change_in_opacity = 1/window_height * difference;

    elements.forEach((element) => {

        if (window.scrollY == window_height) {
            element.style.opacity = 0;
        } else if (window.scrollY == 0) {
            element.style.opacity = 1;
        } else {
            element.style.opacity = parseFloat(element.style.opacity) + change_in_opacity;
        }
    


    });

}


let elementsArray = getElements('.circle');

// let page1Els = getElements('#page1');

setInitialOpacity(elementsArray);
// setInitialOpacity(page1Els);

window.addEventListener("scroll", ()=> {
    
    setOpacity(elementsArray);
    // setOpacity(page1Els);
  });
  