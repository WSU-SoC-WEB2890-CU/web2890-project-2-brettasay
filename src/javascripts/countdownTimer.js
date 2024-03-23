// src/countdownTimer.js
export function initializeCountdownTimer() {
    var daysE1 = document.getElementById('days');
    var hoursE1 = document.getElementById('hours');
    var minutesE1 = document.getElementById('minutes');
    var secondsE1 = document.getElementById('seconds');
  
    function countdownTimer() {
        const countDownDate = new Date('05/18/2024 07:00').getTime();
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
  
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
  
            if (distance < 0) {
                clearInterval(interval);
                daysE1.innerHTML = "00";
                hoursE1.innerHTML = "00";
                minutesE1.innerHTML = "00";
                secondsE1.innerHTML = "00";
                return;
            }
  
            daysE1.innerHTML = formatNumber(Math.floor(distance / day));
            hoursE1.innerHTML = formatNumber(Math.floor((distance % day) / hour));
            minutesE1.innerHTML = formatNumber(Math.floor((distance % hour) / minute));
            secondsE1.innerHTML = formatNumber(Math.floor((distance % minute) / second));
        }, 1000);
    }
  
    function formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }
  
    countdownTimer();
  }
  