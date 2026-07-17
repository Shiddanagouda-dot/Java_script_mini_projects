
const dis=document.getElementById("clock")
function showtime(){
    let date = new Date()
    let time = String(date.getHours()) +  ':' + String(date.getMinutes()) + ':'  + String(date.getSeconds())
    dis.textContent=time
}
setInterval(showtime,1000)