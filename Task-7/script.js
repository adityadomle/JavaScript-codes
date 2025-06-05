var prg = document.querySelector("#progress");

var count = 0;
var int = setInterval(function () {
    if (count === 100) {
        clearInterval(int);
    }
    count++;
    prg.style.width = count + '%'
}, 50);