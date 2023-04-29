"use strict";
(function () {
    window.addEventListener("load",init);
    function init() {
        getId("login").addEventListener("click",switchLogin);
        getId("fermerL").addEventListener("click",ferLogin);
    }
    function getId(e) {
        return document.getElementById(e);
    }

    function getElem(e) {
        return document.querySelectorAll(e);
    }

    function switchLogin() {
        let header=document.querySelector('.header-login');
        if(header.style.padding==='10%')
        {
            header.style.padding='0%';
            header.style.transition='padding 1s ease-in-out';
            getId("fermerL").style.display='none';
            getElem(".header-login a")[0].style.display='none';
            getElem(".header-login a")[1].style.display='none';
        }else{
        header.style.display='flex';
        header.style.transition= 'padding 1s ease-in-out';
        header.style.padding='10%';
        getId("fermerL").style.display='block';
        getElem(".header-login a")[0].style.display='block';
        getElem(".header-login a")[1].style.display='block';}
    }

    function ferLogin() {
        let header=document.querySelector('.header-login');
        if(header.style.padding==='10%')
        {
            header.style.padding='0%';
            header.style.transition='padding 1s ease-in-out';
            getId("fermerL").style.display='none';
            getElem(".header-login a")[0].style.display='none';
            getElem(".header-login a")[1].style.display='none';
        }
    }

    /*function displayLogin() {
        let header=document.querySelector('.header-login');
        header.style.removeProperty('display');
    }*/
}
)();