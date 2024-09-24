
const productsChains = document.querySelector('.products-chains')
const productsBracelets = document.querySelector('.products-bracelets')
const productsrRings = document.querySelector('.products-rings')
const productsrClock = document.querySelector('.products-clock')




const buttonChains = document.querySelector('#button-chains')
const buttonBracelets = document.querySelector('#button-bracelets')
const buttonRings = document.querySelector('#button-rings')
const buttonClock = document.querySelector('#button-clock')







buttonChains.addEventListener('click', function () {

    if (productsChains.style.display === 'flex') {
        productsChains.style.display = 'none'

    } else {
        productsChains.style.display = 'flex'
        productsBracelets.style.display = 'none'
        productsrRings.style.display = 'none'
        productsrClock.style.display = 'none'


    }

});


buttonBracelets.addEventListener('click', function () {

    if (productsBracelets.style.display === 'flex') {
        productsBracelets.style.display = 'none'

    } else {
        productsBracelets.style.display = 'flex'
        productsChains.style.display = 'none'
        productsrRings.style.display = 'none'
        productsrClock.style.display = 'none'
    }
});

buttonRings.addEventListener('click', function () {

    if (productsrRings.style.display === 'flex') {
        productsrRings.style.display = 'none'

    } else {
        productsrRings.style.display = 'flex'
        productsChains.style.display = 'none'
        productsBracelets.style.display = 'none'
        productsrClock.style.display = 'none'
    }
});


buttonClock.addEventListener('click', function () {

    if (productsrClock.style.display === 'flex') {
        productsrClock.style.display = 'none'

    } else {
        productsrClock.style.display = 'flex'
        productsBracelets.style.display = 'none'
        productsrRings.style.display = 'none'
        productsChains.style.display = 'none'


    }

});











var interval = 0
var maxSlider = document.querySelectorAll('.box-img').length - 1;

acao();

function acao() {
    let img = document.querySelectorAll('.box-img img')

    setInterval(function () {

        img[interval].style.display = 'none';
        interval++;
        if (interval > maxSlider) {
            interval = 0;
        }

        img[interval].style.display = 'block';

    }, 3000)

}