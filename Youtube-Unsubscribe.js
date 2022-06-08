var ramsay = 0;

var myVar = setInterval(eltimer, 3000);

function eltimer() {

    var els = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");

    if (ramsay < els.length) {

        els[ramsay].querySelector("[aria-label^='Unsubscribe from']").click();

        setTimeout(function () {

            var unSubBtn = document.getElementById("confirm-button").click();

        }, 2000);

        setTimeout(function () {

            els[ramsay].parentNode.removeChild(els[ramsay]);

        }, 2000);

    }

    ramsay++;

    console.log(ramsay + " of channels were unsubscribed from \n");

    console.log(els.length + " left \n");

}