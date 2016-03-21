var scrollValue;
var lastPos = 0;
var navMenu = $('nav');
var menuHeight = navMenu.outerHeight();

function moveMenu() {
    scrollValue = $(this).scrollTop();
    if(scrollValue > lastPos) {
        //scrollDown
        console.log('we gaan naar benden');
        lastPos = scrollValue;
        navMenu.css('top', - menuHeight + 'px')

    } else {
        //scrollUp
        console.log('haal menu');
        lastPos = scrollValue;
        navMenu.css('top', 0)
    }
}

$(window).on('scroll', moveMenu);