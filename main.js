var endDate = new Date();
var interval;
var punchcount = 0;
var clockArr = ['0','0','0','0','0','0'];

function startClock(){
  setTimer();
  countdown();
  interval = setInterval(countdown, 1000);
}

function stopClock(){
  clearInterval(interval);
}

function clearClock(){
  stopClock();
  clockArr = ['0','0','0','0','0','0'];
  document.querySelector(".hours").innerHTML = "00";
  document.querySelector(".minutes").innerHTML = "00";
  document.querySelector(".seconds").innerHTML = "00";
	
}

function punchIn(param){
    if(punchcount==6){
        punchcount=0;
    }
    clockArr.shift();
    clockArr.push(param);
    punchcount+=1;
    console.log(clockArr);
    updateDisplay();
}

function updateDisplay(){
    var hrs = clockArr[0] + clockArr[1];
    var mins = clockArr[2] + clockArr[3];
    var secs = clockArr[4] + clockArr[5];
    document.querySelector(".hours").innerHTML = hrs;
    document.querySelector(".minutes").innerHTML = mins;
    document.querySelector(".seconds").innerHTML =  secs;
}

function setTimer(){
    var hrs = clockArr[0] + clockArr[1];
    var mins = clockArr[2] + clockArr[3];
    var secs = clockArr[4] + clockArr[5];
    
    //test values
    endDate.setHours(1);
    endDate.setMinutes(20);
    endDate.setSeconds(30);

}

function countdown() {

  var remaining = endDate - new Date();
  var hours = Math.floor(remaining / (1000 * 60 * 60)) % 24;
  var minutes = Math.floor(remaining / (1000 * 60)) % 60;
  var seconds = Math.floor(remaining / 1000) % 60;

  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}

