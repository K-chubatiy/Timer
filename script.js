//Timer fields
const hourElement = document.querySelector(".hour")
const minuteElement = document.querySelector(".minute")
const secondElement = document.querySelector(".second")
const mSecElement = document.querySelector(".millisecond")

//Buttons
const startButton = document.querySelector(".start")
const pauseButton = document.querySelector(".pause")
const stopButton = document.querySelector(".stop")
const lapButton = document.querySelector(".lap")
const resetButton = document.querySelector(".reset")

//Logo and Footer
const logoSpin = document.getElementById('logo')
const footer = document.querySelector("footer")
const lap = document.querySelector(".footerLap")

//Variables
let hour = 0,
    minutes = 0,
    second = 0,
    millisecond = 0,
    counter = 0,
    interval


//Functions
const findResult = () =>{
    let result = ""
    if(hour > 0){
        result += hour + "h "
    }
    if(minutes > 0){
        result += minutes + "m "
    }
    if(second > 0){
        result += second + "s "
    }
    if(millisecond > 0){
        result += millisecond + "ms "
    }
    return result
}
const clearAll = () =>{
    hour = 0;
    minutes = 0;
    second = 0;
    mSecElement.innerText = "00";
    secondElement.innerText = "00";
    minuteElement.innerText = "00";
    hourElement.innerText = "00";
}
const startButtonFunction = () =>{
    startButton.classList.add('pushed')
    logoSpin.classList.add('fa-spin','fa-spin-reverse');
    clearInterval(interval)
    interval = setInterval(startTimer,10)
}
const pauseButtonFunction = () =>{
    startButton.classList.remove('pushed')
    logoSpin.classList.remove('fa-spin')
    clearInterval(interval)
}
const stopButtonFunction = () =>{
    startButton.classList.remove('pushed')
    logoSpin.classList.remove('fa-spin')
    clearInterval(interval)
    clearAll()
}
const lapButtonFunction = () =>{
    startButton.classList.add('pushed')
    logoSpin.classList.add('fa-spin','fa-spin-reverse');
    footer.classList.add('visibleFooter')
    clearInterval(interval)
    counter++
    const paragraph = document.createElement('p')
    paragraph.innerText = "Lap "+ counter + ": " + findResult();
    lap.append(paragraph)
    clearAll()
    clearInterval()
    interval = setInterval(startTimer,10)
}
const resetButtonFunction = () =>{
    footer.classList.remove("visibleFooter")
    while(lap.firstChild){
        lap.removeChild(lap.firstChild)
    }
    counter = 0

}



//Listeners
startButton.addEventListener("click", startButtonFunction);
pauseButton.addEventListener("click", pauseButtonFunction);
stopButton.addEventListener("click", stopButtonFunction);
lapButton.addEventListener("click", lapButtonFunction);
resetButton.addEventListener("click", resetButtonFunction);


const startTimer = () => {

    //milliseconds
    millisecond++;
    if (millisecond <= 9) {
        mSecElement.innerText = "0" + millisecond
    }
    if (millisecond > 9) {
        mSecElement.innerText = millisecond
    }
    if (millisecond > 99) {
        //seconds
        second++
        millisecond = 0;
        mSecElement.innerText = "0" + millisecond
        if (second <= 9) {
            secondElement.innerText = "0" + second
        }
        if (second > 9) {
            secondElement.innerText = second
        }
        if (second > 59) {
            minutes++
            second = 0
            secondElement.innerText = "0" + second
            if (minutes < 9) {
                minuteElement.innerText = "0" + minutes
            }
            if (minutes >= 9) {
                minuteElement.innerText = minutes
            }
            if (minutes > 59) {
                hour++
                minutes = 0;
                minuteElement.innerText = "0" + minutes
                if (hour <= 9) {
                    hourElement.innerText = "0" + hour
                }
                if (hour > 9) {
                    hourElement.innerText = hour
                }
                if (hour > 99) {
                    console.log("You are freak!")
                }
            }
        }
    }
}
