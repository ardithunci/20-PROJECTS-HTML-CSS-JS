const clickPlay = document.querySelectorAll('.key');
//cursor
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
//key
window.addEventListener("keydown",(e)=>{
        const active = document.querySelector('.playing');
        if (active){
            active.classList.remove("playing")
        }
       const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
       if (!key) return;
       key.classList.toggle("playing"); 
       const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
       audio.currentTime = 0;
       audio.play();
})

