


const time = document.getElementById("time");

let date = new Date();
let hrs = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let half = "PM"


time.textContent = hrs + ':' + min + ':' + sec + ':' + half