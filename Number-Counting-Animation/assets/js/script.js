let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;


valueDisplays.forEach((valueDisplay) => {
    let startvalue = 0;
    let endvalue = parseInt(valueDisplay.getAttribute("data-val"));

console.log(endvalue);

    let duration = Math.floor(interval / endvalue);
    let counter = setInterval (function () {
        startvalue += 1 ;
        valueDisplay.textContent = startvalue ;
        if ( startvalue == endvalue) {
            clearInterval(counter) ;
        }

    }, duration);
});