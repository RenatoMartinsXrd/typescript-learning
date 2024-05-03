"use strict";
const btnMenu = document.querySelector('#btn-mobile');
const navMenu = document.querySelector('#nav');
function toggleMenu() {
    if (navMenu instanceof HTMLElement) {
        navMenu.classList.toggle('active');
    }
}
function toggleAriaExpanded() {
    if (btnMenu) {
        btnMenu.ariaExpanded = btnMenu.ariaExpanded === 'true' ? 'false' : 'true';
    }
}
function toggleAriaLabel() {
    if (!btnMenu || !navMenu || !(navMenu instanceof HTMLElement))
        return;
    btnMenu.ariaExpanded = navMenu.classList?.contains('active')
        ? 'Fechar Menu'
        : 'Abrir Menu';
}
btnMenu?.addEventListener('pointerdown', () => {
    toggleMenu();
    toggleAriaExpanded();
    toggleAriaLabel();
});
