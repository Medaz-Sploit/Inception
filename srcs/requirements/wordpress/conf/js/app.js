

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'right',
});

var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("active");
});

var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p2b = document.querySelector('#page2');
var p1b = document.querySelector('#fullpage');
p2.addEventListener("click", function() {
    fullpage_api.destroy('all');
    p1b.style.display = 'none';
    p2b.style.display = 'block';
    new fullpage('#page2', {
        autoScrolling: true,
        navigationPosition: 'right',
        scrollHorizontally: true,
    });
});
p1.addEventListener("click", function() {
    fullpage_api.destroy('all');
    p2b.style.display = 'none';
    p1b.style.display = 'block';
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'right',
    });
});

// Open and close the color change module
$('.colorchange').click(function() {
    if(!$(this).hasClass('open')) {
        $('.colors').css({
            'visibility' : 'visible',
            'opacity' : '1',
        });
        $(this).addClass('open');
    } else {
        $('.colors').css({
            'visibility' : 'hidden',
            'opacity' : '0',
        });
        $(this).removeClass('open');
    }
});
if(!$('.colorchange').hasClass('open')) {
    $('.close').click(function() {
        $(this).parent().css({
            'visibility' : 'hidden',
            'opacity' : '0',
        });
        $(this).parent().siblings('.colorchange').removeClass('open');
    });
}
$('body').click(function(event){
    if(!$(event.target).is('.colors, .colorchange')){
        $('.colorchange').removeClass('open');
        $('.colors').css({
            'visibility' : 'hidden',
            'opacity' : '0',
        });
    }
 });

var dark = document.querySelector(".chclrd");
var light = document.querySelector(".chclrw");
dark.addEventListener("click", function() {
    document.documentElement.style.setProperty('--main-color', 'lightslategray');
    document.documentElement.style.setProperty('--inner-color', 'rebeccapurple');
    document.documentElement.style.setProperty('--secondary-color', 'slategray');
    document.documentElement.style.setProperty('--nav-color', 'rgb(105,105,105)');
    document.documentElement.style.setProperty('--text', 'white');
    document.documentElement.style.setProperty('--text-rgb', '255, 255, 255');
});
light.addEventListener("click", function() {
    document.documentElement.style.setProperty('--main-color', 'antiquewhite');
    document.documentElement.style.setProperty('--inner-color', 'pink');
    document.documentElement.style.setProperty('--secondary-color', 'transparent');
    document.documentElement.style.setProperty('--nav-color', 'wheat');
    document.documentElement.style.setProperty('--text', 'black');
    document.documentElement.style.setProperty('--text-rgb', '000, 000, 000');
});

// Color the code-elements
w3CodeColor(document.getElementById("code"));

// type-effect for the code-elements
new TypeIt('code.html > span', {
    HTML: true,
    loop: false,
    cursor: false,
    startDelay: 500,
    speed: 70,
    waitUntilVisible: true,
    menu: '.nav',
}).go();
new TypeIt('code.html2 > span', {
    HTML: true,
    loop: false,
    cursor: false,
    startDelay: 2000,
    speed: 70,
    waitUntilVisible: true,
    menu: '.nav',
}).go();
new TypeIt('code.html3 > span', {
    HTML: true,
    loop: false,
    cursor: false,
    startDelay: 2500,
    speed: 70,
    waitUntilVisible: true,
    menu: '.nav',
}).go();
new TypeIt('code.html4 > span', {
    HTML: true,
    loop: false,
    cursor: false,
    startDelay: 3000,
    speed: 70,
    waitUntilVisible: true,
    menu: '.nav',
}).go();
new TypeIt('code.html5 > span', {
    HTML: true,
    loop: false,
    cursor: false,
    startDelay: 3500,
    speed: 70,
    waitUntilVisible: true,
    menu: '.nav',
}).go();
new TypeIt('code.html6 > span', {
    HTML: true,
    loop: false,
    cursor: false,
    startDelay: 4000,
    speed: 70,
    waitUntilVisible: true,
    menu: '.nav',
}).go();


// First page w up-down fullpage, photo & project pages w left-right

// color change w css --var
