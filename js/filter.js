'use strict';

//появление фильтра 
const buttonFilter = document.querySelector('a.btn_filter');

buttonFilter.addEventListener('click', click)

function click(){
    buttonFilter.classList.toggle('active');
    const active = document.querySelector('.filter > a.active')
    const filterBG = document.querySelector('.filter_bg');

    if(active){
        
        filterBG.style.cssText = `
            display: block; 
        `;
    } 
    if (!active) {
        filterBG.style.cssText = `display: none`;
    }
}