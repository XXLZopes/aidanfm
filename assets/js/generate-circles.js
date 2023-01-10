const page1El = document.querySelector('#page1');
const page2El = document.querySelector('#page2')

class Circle {
    constructor(x, y, r, color, txt) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color
        this.txt = txt;
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    setY(y) {
        this.y = y;
    }
}
//Declare circle
let circle0 = new Circle('0', '0', '15', '#A3BECC', 'hi');
let circle1 = new Circle('20', '180', '20', 'red', 'hi');
let circle2 = new Circle('-1', '250', '27', 'red', 'hi');
let circle3 = new Circle('30', '400', '15', 'red', 'hi');
let circle4 = new Circle('-1', '700', '33', 'red', 'hi');

let circles = [circle0, circle1, circle2, circle3, circle4]
circle4.setY(window.innerHeight - 3.9*circle4.r);
function generateCircles (circleArray, parentElement, className) {
    circleArray.forEach((circle, i) => {
        let circleEl = document.createElement('div');
    
        //Circle START
        circleEl.setAttribute('id', `${className}${i}`);
        circleEl.setAttribute('class', className);
    
        if(circle.x < 0) {
            circleEl.style.right = (circle.x * -1) - 1 + 'vw';
        } else {
            circleEl.style.left = circle.x + 'vw';
        }
    
        if(circle.y < 0) {
            circleEl.style.bottom = (circle.y * -1) - 1 + 'px';
        } else {
            circleEl.style.top = circle.y + 'px';
        }

        circleEl.style.height = window.innerWidth < 700 ? circle.r + 'vw' : circle.r * .6 + 'vw';
        circleEl.style.width = window.innerWidth < 700 ? circle.r + 'vw' : circle.r * .6 + 'vw';

        window.addEventListener('resize', function() {
            circleEl.style.height = window.innerWidth < 700 ? circle.r + 'vw' : circle.r * .6 + 'vw';
            circleEl.style.width = window.innerWidth < 700 ? circle.r + 'vw' : circle.r * .6 + 'vw';
        }, false)
        
        //Circle END
    
        parentElement.appendChild(circleEl);
    });

}

generateCircles(circles, page1El, 'circle');
generateCircles(circles, page2El, 'circle1');