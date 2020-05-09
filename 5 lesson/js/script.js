'use strict';

let menuItems = document.querySelectorAll('.menu-item'),
    menuItem = document.createElement('li'),
    menu = document.querySelector('.menu'),
    title = document.querySelector('#title'),
    adv = document.querySelector('.adv'),
    answerFill = document.querySelector('#prompt');

menu.insertBefore(menuItems[2], menuItems[1]);

menuItem.classList.add('menu-item');
menuItem.textContent = 'Пятый элемент';
menu.appendChild(menuItem);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let answer = prompt('Как Вы относитесь к технике Apple?');
answerFill.textContent = answer;
