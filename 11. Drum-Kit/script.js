const clickPlay = document.querySelectorAll('.key');

for (let click of clickPlay){
    click.addEventListener("click", ()=>{
        const active = document.querySelector('.playing');
        if (active){
            active.classList.remove("playing")
        }
        click.classList.toggle("playing");
        const audio = document.querySelector(`audio[data-key="${click.dataset.key}"]`);
        audio.currentTime = 0;
        audio.play();
    })
}

window.addEventListener("keyup",(e)=>{
    switch(e.keyCode){
       case 65:
        play(e.keyCode)
       break;
       case 83:
        play(e.keyCode)
       break;
       case 68:
        play(e.keyCode)
       break;
       case 70:
        play(e.keyCode)
       break;
       case 71:
        play(e.keyCode)
       break;
       case 72:
        play(e.keyCode)
       break;
       case 74:
        play(e.keyCode) 
       break;
       case 75:
        play(e.keyCode)
       break;
       case 76:
        play(e.keyCode)
       break;
    }

    function play(keyCode){
        const active = document.querySelector('.playing');
        if (active){
            active.classList.remove("playing")
        }
       const key = document.querySelector(`div[data-key="${keyCode}"]`)
       key.classList.toggle("playing"); 
       const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
       audio.currentTime = 0;
       audio.play();
    }
})

