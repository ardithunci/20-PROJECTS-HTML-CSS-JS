//key
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keydown", playSound);

//click
keys.forEach(key => key.addEventListener('click', ()=>{
    const audio = document.querySelector(`audio[data-key="${key.getAttribute('data-key')}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}));

