import '/sass/main.sass';
import '/scripts/slider.js';
import '/scripts/preset.js';

document.querySelector('.burger__button').addEventListener('click', function(){
    document.querySelector('.burger__icon').classList.toggle('active');
  })