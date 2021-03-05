let blur = document.querySelector('.blur')
let spread = document.querySelector('.spread')
let vertical = document.querySelector('.vertical')
let horizontal = document.querySelector('.horizontal')
let color = document.querySelector('.color')
let box = document.querySelector('.box')
let boxShadovCode = document.querySelector('.box-shadow-code')
let settingsRanges = document.querySelectorAll('.setting-block input')


settingsRanges.forEach(input => {
    input.addEventListener('input', () => {
        generateShadow()
    })
})

function generateShadow() {
    const property = `${horizontal.value}px ${vertical.value}px ${blur.value}px ${spread.value}px ${color.value}`
    box.style.boxShadow = property
    boxShadovCode.textContent = `box-shadow: ${property};`
}

generateShadow()
let inputRange = document.getElementsByClassName('range')[0],
    maxValue = 100,
    speed = 5,
    currValue, rafID;


inputRange.min = 0;
inputRange.max = maxValue;


function unlockStartHandler() {

    window.cancelAnimationFrame(rafID);

    currValue = +this.value;
}

function unlockEndHandler() {


    currValue = +this.value;


    if (currValue >= maxValue) {
        successHandler();
    } else {
        rafID = window.requestAnimationFrame(animateHandler);
    }
}


function animateHandler() {


    inputRange.value = currValue;


    if (currValue < 20) {
        inputRange.classList.remove('ltpurple');
    }
    if (currValue < 40) {
        inputRange.classList.remove('purple');
    }
    if (currValue < 60) {
        inputRange.classList.remove('pink');
    }


    if (currValue > -1) {
        window.requestAnimationFrame(animateHandler);
    }


    currValue = currValue - speed;
}


function successHandler() {
    alert('Unlocked');
};


inputRange.addEventListener('mousedown', unlockStartHandler, false);
inputRange.addEventListener('mousestart', unlockStartHandler, false);
inputRange.addEventListener('mouseup', unlockEndHandler, false);
inputRange.addEventListener('touchend', unlockEndHandler, false);


inputRange.addEventListener('input', function () {

    if (this.value > 20) {
        inputRange.classList.add('ltpurple');
    }
    if (this.value > 40) {
        inputRange.classList.add('purple');
    }
    if (this.value > 60) {
        inputRange.classList.add('pink');
    }


    if (this.value < 20) {
        inputRange.classList.remove('ltpurple');
    }
    if (this.value < 40) {
        inputRange.classList.remove('purple');
    }
    if (this.value < 60) {
        inputRange.classList.remove('pink');
    }
});