// Burger handler
const headerNav = document.querySelector('.header-nav')
const menuNav = document.querySelector('.menu-nav')

function headerBurgerOpen () {
    const firstBurger = document.querySelector('.first-burger')
    firstBurger.addEventListener('click', () => {
        headerNav.classList.add('header-nav_active')
    })
}

function headerBurgerClose () {
    const headerClose = document.querySelector('.header-close')
    headerClose.addEventListener('click', () => {
        headerNav.classList.remove('header-nav_active')
    })
}

function menuBurgerOpen () {
    const secondBurger = document.querySelector('.second-burger')
    secondBurger.addEventListener('click', () => {
        menuNav.classList.add('menu-nav_active')
    })
}

function menuBurgerClose () {
    const menuClose = document.querySelector('.menu-close')
    menuClose.addEventListener('click', () => {
        menuNav.classList.remove('menu-nav_active')
    })
}

menuBurgerOpen ()

menuBurgerClose ()


// Header burger open&close
headerBurgerClose ()

headerBurgerOpen ()

