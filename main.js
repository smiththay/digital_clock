
setInterval(() =>{

const time = document.getElementById('time');
const stand = document.querySelector('.standard')
const milit = document.querySelector('.military')


let date = new Date();
let hrs = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let half = "AM"

if(hrs > 12){
    hrs = hrs - 12;
    half = "PM"
}
if(hrs < 10){
    hrs = '0' + hrs 
}
if(min < 10){
    min = '0' + min;
}
if(sec < 10){
    sec = '0' + sec;
}

time.textContent = hrs + ':' + min + ':' + sec + ' ' + half;

}, 1000);