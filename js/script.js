"use strict";
{
    const navBtn = document.querySelector(".toggle-btn");
    const navMask = document.getElementById("mask");
    const navMenu = document.getElementById("global-nav");
    
    navBtn.addEventListener("click", ()=>{
        navBtn.classList.toggle("open");
        navMask.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    navMask.addEventListener("click", ()=>{
        if(navMask.classList.contains('active')){
            navBtn.classList.remove("open");
            navMask.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
}