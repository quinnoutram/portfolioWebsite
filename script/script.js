const hamburg = document.getElementById('hamburger');
const topBun = document.getElementById('top');
const middleBun = document.getElementById('middle');
const bottomBun = document.getElementById('bottom');

hamburg.addEventListener('click', function(){
  topBun.classList.toggle('active')
  middleBun.classList.toggle('active')
  bottomBun.classList.toggle('active')
})