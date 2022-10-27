const hamburg = document.getElementById('hamburger');
const topBun = document.getElementById('top');
const middleBun = document.getElementById('middle');
const bottomBun = document.getElementById('bottom');
const header = document.getElementById('header');

hamburg.addEventListener('click', function(){
  topBun.classList.toggle('active')
  middleBun.classList.toggle('active')
  bottomBun.classList.toggle('active')
  header.classList.toggle('active')
}) // <--- This is a hamburger menu toggle causes CSS classes to activate 