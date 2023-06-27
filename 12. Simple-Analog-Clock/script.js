const secondHand = document.querySelector('.second-hand');
    const minutesHand = document.querySelector('.min-hand');
    const hoursHand = document.querySelector('.min-hand');

    function setDate(){
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360)+90;
      //removing transition after 90deg
      if (secondsDegrees !== 90){
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      }else {
      secondHand.style.transition = "0s";
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      }

      const mins = now.getMinutes();
      const minutesDegrees = ((mins / 60) * 360)+90;
      minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

      const hours = now.getHours();
      const hoursDegrees = ((hours / 12) * 360)+90;
      hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

    }
    setInterval(setDate, 1000);