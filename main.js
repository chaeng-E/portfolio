'use strict';



const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect ().height;
document .addEventListener ('scroll', () => {
    console.log(window.scrollY);
    console.log(navbarHeight);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});


//메뉴를 클릭했을때 해당화면으로 이동
const navbarMenu=document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) =>{
    const target = event.target;
    const link = target.dataset.link;
    if(link==null){
        return;
    }
        navbarMenu.classList.remove('open');
     console.log(event.target.dataset.link);
    const scrollTo = document .querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth'});
});



    //Navbar
    const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
    navbarToggleBtn.addEventListener('click' , ( ) =>{
        navbarMenu.classList.toggle('open');
    });

    //make...
const me = document .querySelector('.me__container');
const meHeight = me.getBoundingClientRect( ).height;
document.addEventListener('scroll', () => {
    me.style.opacity = 1 - window.scrollY / meHeight;
});
    