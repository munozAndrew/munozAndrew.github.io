let text = document.getElementById('text');
let tops = document.getElementById('top')
let rocket = document.getElementById('rocket')
let whiteBR = document.getElementById('whiteBR')
let whiteBL = document.getElementById('whiteBL')
let whiteTR = document.getElementById('whiteTR')
let whiteMR = document.getElementById('whiteMR')
let whiteTL = document.getElementById('whiteTl')
let whiteTML = document.getElementById('whiteTML')
let whiteML = document.getElementById('whiteML')


let blackBR = document.getElementById('blackBR')
let blackTR = document.getElementById('blackTR')
let blackTL = document.getElementById('blackTL')


let stars = document.getElementById('stars')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (value >350) {
        value = 357;
    }


    text.style.marginTop = value * 1.5 + 'px';

    rocket.style.top = value * -2 + 'px';
    stars.style.top = value * .9 + 'px';



    whiteBR.style.left = value * .5 + 'px';
    whiteBR.style.top = value * 1 + 'px';

    whiteBL.style.left = value * -.5 + 'px';
    whiteBL.style.top = value * 1 + 'px';

    whiteTR.style.left = value * .7 + 'px';
    whiteTR.style.top = value * .5 + 'px';

    whiteMR.style.left = value * .2 + 'px';
    whiteMR.style.top = value * .8 + 'px';

    whiteTL.style.left = value * -.2 + 'px';
    whiteTL.style.top = value * .7 + 'px';

    whiteTML.style.left = value * -.3 + 'px';
    whiteTML.style.top = value * .9 + 'px';

    whiteML.style.left = value * -.3 + 'px';
    whiteML.style.top = value * .9 + 'px';


    
    blackTL.style.top = value *1 + 'px';
    blackTL.style.left = value * -1 + 'px';

    blackBR.style.top = value *1 + 'px';
    blackBR.style.left = value *1 + 'px';

    blackTR.style.top = value * .8 + 'px';
    blackTR.style.left = value *1 + 'px';

    tops.style.top = value * 1.5 + 'px';
    


});