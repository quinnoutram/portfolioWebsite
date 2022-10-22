const hamburg = document.getElementById('hamburger');
const topBun = document.getElementById('top');
const middleBun = document.getElementById('middle');
const bottomBun = document.getElementById('bottom');

hamburg.addEventListener('click', function(){
  topBun.classList.toggle('active')
  middleBun.classList.toggle('active')
  bottomBun.classList.toggle('active')
})
const prompts = ['Hi, My name is Quinn.', 'I am a junior developer.'];
const speed = 110;
const pause = 2600; // <--- the longer delay between text direction changes

function typeWriter(i=0, index=1, direction=1) {
  let typing = prompts[i].slice(0, index);
  document.querySelector("#landing").textContent = typing;

  if (typing.length >= prompts[i].length) { // reverses direction
    setTimeout(() => typeWriter(i, index-1, -1), pause);
  } else if (typing.length === 0) { // changes the index of "texts"
    setTimeout(() => typeWriter((i+1) % prompts.length), speed);
  } else { // continue in the current direction
    setTimeout(() => typeWriter(i, index+direction, direction), speed);
  }
}

typeWriter();