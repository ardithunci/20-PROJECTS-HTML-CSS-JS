function clock(){
    const clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();

    if (hour < 10){
        hours = '0' + hours;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }
    if (seconds < 10){
        seconds = '0' + seconds;
    }

    document.getElementById('hour').textContent = hours+':';
    document.getElementById('minutes').textContent = minutes+':';
    document.getElementById('seconds').textContent = seconds;
}

setInterval(clock, 100);