var timeNew
var sHours
var sMins
var sSeconds
var endTime
var stopB = document.getElementById("stop")
var startB = document.getElementById("start")
var stopB = document.getElementById("stopImg")
var startIMG = document.getElementById("stopImg")

stopB.disabled=true
stopImg.src='img/disabledStopButton.png'

function startTimer(){
  //begin time from button press
  if(startB.disabled==false)
  {
    stopB.disabled=false
    startB.disabled=true
    stopImg.src='img/stopButton.png'
    startImg.src='img/disabledStartButton.png'
    timeNew=new Date()
    sHours=timeNew.getHours()
    sMins=timeNew.getMinutes()
    sSeconds=timeNew.getSeconds()
    console.log("current time is %d %d %d", sHours, sMins, sSeconds)
  }
  else {
    alert("Please stop current timer to start a new one.")
  }
}

function stopTimer(disabledStop){
  //send some signal to arduino about tabulated time
  if (stopB.disabled==false)
  {
    endTime=new Date()
    sHours-=endTime.getHours()
    sMins-=endTime.getMinutes()
    sSeconds-=endTime.getSeconds()
    sHours=Math.abs(sHours)
    sMins=Math.abs(sMins)
    sSeoncds=Math.abs(sSeconds)
    alert("You logged "+ sHours +" hours " +sMins +" minutes " +sSeconds +" seconds Thank you!")
    stopB.disabled=true
    stopImg.src='img/disabledStopButton.png'
    startImg.src='img/startButton.png'
    startB.disabled=false
  }
  else
  {
    alert("You have to start a timer if you wish to log time spent.")
  }
}
