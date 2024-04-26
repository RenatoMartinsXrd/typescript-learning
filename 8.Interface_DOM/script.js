"use strict";
// const links = document.querySelectorAll('.link') as NodeListOf<HTMLElement>
// links.forEach((value) => {
//   value.style.color = 'black'
//   value.style.border = '1px solid red'
// })
const links = document.querySelectorAll('.link');
links.forEach((value) => {
    if (value instanceof HTMLElement) {
        value.style.color = 'black';
        value.style.border = '1px solid red';
    }
});
