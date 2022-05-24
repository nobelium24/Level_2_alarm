let a = [];
let alarmHour = document.getElementById("hour");
let alarmMinute = document.getElementById("minute");
let alarmSecond = document.getElementById("second");
let hourInput = document.getElementById("shour");
let minuteInput = document.getElementById("sminute");
let noise = document.getElementById("sound")
let message = document.getElementById("almsg")
let okButton = document.getElementById("okbtn")
let okayBtn = document.getElementById("okay")
let customMsg = document.getElementById("custom")
let reminder = document.getElementById("remind")
let reminder2 = document.getElementById("remind2")
let setBtn = document.getElementById("set")
let msgDisplay = document.getElementById("display")


function ahour() {
    let hDate = new Date();
    alarmHour.innerHTML = `<div id="style3"><h3>Hour</h3>  <h4>${hDate.getHours() } </h4> <div>`

    let mDate = new Date();
    alarmMinute.innerHTML =  `<div id="style3"><h3>Minutes</h3>  <h4>${mDate.getMinutes()} </h4> <div>`

    let sDate = new Date;
    alarmSecond.innerHTML = `<div id="style3"><h3>Seconds</h3>  <h4>${sDate.getSeconds()} </h4> <div>`
    if (hourInput.value == alarmHour.innerHTML && minuteInput.value == alarmMinute.innerHTML) {
        noise.play()
        alert("remind")
        customMsg.style.display = "inherit"
        customMsg.style.visibility = "visible"

        
        console.log(33);

    }
    if (minuteInput.value < alarmMinute.innerHTML) {
        noise.pause()
    }
};
ahour();
setInterval(ahour, 1000);


function msg() {
    // customMsg.style.display = "none"
    okayBtn.style.display = "none"
    reminder.style.display = "none"
}

function alarmSet(params) {
    message.style.display = "inherit";
    okButton.style.display = "inherit";
    customMsg.style.display = "none"

    if (hourInput != "" && minuteInput != "") {


        if (hourInput.value != "" && minuteInput != "") {
            hourInput.disabled = true;
            minuteInput.disabled = true;
            setBtn.disabled = true
            // customMsg.disabled = true
        };
        
        
    };
    if (hourInput == "" && minuteInput == "") {
        alert("Kindly set your alarm")
        hourInput.disabled = false;
        minuteInput.disabled = false;
        setBtn.disabled = false
    }
    
    dream()
};

if (localStorage.getItem("alarm") && localStorage.getItem("alarm2")) {
    hourInput.value = JSON.parse(localStorage.getItem("alarm"))
    minuteInput.value = JSON.parse(localStorage.getItem("alarm2"))
}

// if (localStorage.getItem("alarm")) {
//     a = JSON.parse(localStorage.getItem("alarm"))
// }

// function dream() {
//     obj = { alarm1 : hourInput.value, alarmMins: minuteInput.value}
//     a.push(obj)
//     localStorage.setItem ("alarm", JSON.stringify(a) )
//     // localStorage.setItem("alarm2", JSON.stringify(minuteInput.value))
//     let dream = localStorage.getItem("alarm")
//     // let dream2 = localStorage.getItem("alarm2")
// }

function dream() {
    localStorage.setItem("alarm", JSON.stringify(hourInput.value))
    localStorage.setItem("alarm2", JSON.stringify(minuteInput.value))
}
dream()

function okay(params) {
    message.style.display = "none"
    okButton.style.display = "none"
}

function alarmReset(params) {
    hourInput.value = ""
    minuteInput.value = ""
    hourInput.disabled = false
    minuteInput.disabled = false
    setBtn.disabled = false
    customMsg.disabled = false
    customMsg.style.display = "inherit"
    okayBtn.style.display = "inherit"
    noise.pause()
    // reminder2.style.display = "none"
    customMsg.value = ""
    localStorage.removeItem("alarm")
    // localStorage.removeItem("alarm2")


}

// function aminute() {
//    let mDate = new Date()
//    alarmMinute.innerHTML = mDate.getMinutes()
// }
// aminute()
// setInterval(aminute, 1000)