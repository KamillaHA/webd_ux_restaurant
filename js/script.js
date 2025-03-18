// Single Page Application (SPA)

'use strict';

document.querySelectorAll('nav > ul > li > a').forEach(menuOption => {
    menuOption.addEventListener('click', function() {
        // The clicked menu option is selected.
        document.querySelectorAll(`nav > ul > li > a`).forEach(option => {
            option.classList.remove('selected');
        });
        this.classList.add('selected');
        
        // The page title gets updated 
        document.title = `${this.innerText} | Restaurant KEA`;
        
        // The clicked page is shown and the other pages are hidden.
        const dataTarget = this.getAttribute('data-target');        
        document.querySelector(`#${dataTarget}`).classList.remove('hidden');
        document.querySelectorAll(`.page:not(#${dataTarget})`).forEach(page => {
            page.classList.add('hidden');
        });
    });
});