/*======================================== COUNT-DOWN ============================*/
(function () {
    //Setting Seconds, Minutes, Hours, Days.
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    
    //Deadline date
    let birthday = "Dec 22, 2021 00:00:00",
        countdown = new Date(birthday).getTime(),
        x = setInterval(function () {
          let currentDate = new Date().getTime(),
              distance = countdown - currentDate;
          const setDays = document.getElementById('days'),
                setHours = document.getElementById('hours'),
                setMinutes = document.getElementById('minutes'),
                setSeconds = document.getElementById('seconds');
          
            setDays.innerText = Math.floor(distance / (days)),
            setHours.innerText = Math.floor((distance % (days)) / (hours)),
            setMinutes.innerText = Math.floor((distance % (hours)) / (minutes)),
            setSeconds.innerText = Math.floor((distance % (minutes)) / seconds);
          
          if(distance < 0) {
            clearInterval(x);
          }
        }, 0)
  }());