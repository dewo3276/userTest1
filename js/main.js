var timeNew
var sHours
var sMins
var sSeconds
var endTime
var stopB = document.getElementById("stop")
var startB = document.getElementById("start")
var stopB = document.getElementById("stopImg")
var startIMG = document.getElementById("stopImg")

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDkh238kMVjpoeWXkFjtn9ZF8_L_a4LC64",
  authDomain: "timertracker-29904.firebaseapp.com",
  projectId: "timertracker-29904",
  storageBucket: "timertracker-29904.appspot.com",
  messagingSenderId: "243160475778",
  appId: "1:243160475778:web:d9ce17fe93c59f06dd2c9b",
  measurementId: "G-RJYRXJR50N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

stopB.disabled = true
stopImg.src = 'img/disabledStopButton.png'

function startTimer() {
  //begin time from button press
  if (startB.disabled == false) {
    stopB.disabled = false
    startB.disabled = true
    stopImg.src = 'img/stopButton.png'
    startImg.src = 'img/disabledStartButton.png'
    timeNew = new Date()
    sHours = timeNew.getHours()
    sMins = timeNew.getMinutes()
    sSeconds = timeNew.getSeconds()
    console.log("current time is %d %d %d", sHours, sMins, sSeconds)
  } else {
    alert("Please stop current timer to start a new one.")
  }
}

function stopTimer(disabledStop) {
  //send some signal to arduino about tabulated time
  if (stopB.disabled == false) {
    endTime = new Date()
    sHours -= endTime.getHours()
    sMins -= endTime.getMinutes()
    sSeconds -= endTime.getSeconds()
    sHours = Math.abs(sHours)
    sMins = Math.abs(sMins)
    sSeoncds = Math.abs(sSeconds)
    alert("You logged " + sHours + " hours " + sMins + " minutes " + sSeconds + " seconds Thank you!")
    stopB.disabled = true
    stopImg.src = 'img/disabledStopButton.png'
    startImg.src = 'img/startButton.png'
    startB.disabled = false
    var timeTotal = String(sHours) + " " + String(sMins) + " " + String(sSeconds)

    firebase.database().ref("userTimes").push(timeTotal)
    

  } else {
    alert("You have to start a timer if you wish to log time spent.")
  }
}
