function parallax() {
    setpos("#pb0");
    setpos("#pb1");
    setpos("#pb2", 4);

}



function setpos(element, factor) {
    factor = factor || 2;

    var offset = $(element).offset();
    var w = $(window);

    var posx = (offset.left - w.scrollLeft()) / factor;
    var posy = (offset.top - w.scrollTop()) / factor;

    $(element).css('background-position', '50% ' + posy + 'px');

    // use this to have parralax scrolling vertical and horizontal
    //$(element).css('background-position', posx+'px '+posy+'px');
}

$(document).ready(function() {
    parallax();
}).scroll(function() {
    parallax();
});

// ===== Scroll to Top ==== 

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}