
let sec=0
let min=0
let hour=0
let timer;
let time=document.getElementById("display")
const btn1=document.getElementsByClassName("btn1")


btn1[0].addEventListener("click",start)
btn1[1].addEventListener("click",stop)
btn1[2].addEventListener("click",reset)

function settime(){
    sec++;

    if (sec >= 60) {
        sec = 0;
        min++;
    }

    if (min >= 60) {
        min = 0;
        hour++;
    }

    time.textContent =
    String(hour).padStart(2, "0") + ":" +
    String(min).padStart(2, "0") + ":" +
    String(sec).padStart(2, "0");
}
function start(){
     clearInterval(timer);     
     timer=setInterval(settime,1000)
}

function stop(){
        clearInterval(timer)

}

function reset(){
    clearInterval(timer)
    time.textContent = "00:00:00"
    sec=0
    min=0
    hour=0
}
