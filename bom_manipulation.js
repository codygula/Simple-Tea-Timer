function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if(diff <= 0){
            var message = document.querySelector('#message')
            message = message.textContent = "time over"
            display.textContent = "00:00"
            display = document.querySelector('#time')
            
        }
        else{
            display.textContent = minutes + ":" + seconds;
        }

    };
    setInterval(timer, 1000); 
}

function timerThing() {
    var twoMinutes = 120,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
    if (startTimer.minutes == 0 && startTimer.seconds == 0){
        display.textContent = "00:00"
    }
};

function resetTimer(){
    var resetDisplay = document.querySelector('#time') 
    resetDisplay.textContent = '02:00';

}


