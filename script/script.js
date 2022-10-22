const hamburg = document.getElementById('hamburger');
const topBun = document.getElementById('top');
const middleBun = document.getElementById('middle');
const bottomBun = document.getElementById('bottom');
const typing = document.getElementById('landing');

hamburg.addEventListener('click', function(){
  topBun.classList.toggle('active')
  middleBun.classList.toggle('active')
  bottomBun.classList.toggle('active')
})

let i = 0
let text1 = "Hi! My name is Quinn."
let text2 = "I am a Developer."
let speed = 100;

function typeWriter() {
  if (i < text1.length) {
    typing.innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeWriter, speed)
  }
}

typeWriter()