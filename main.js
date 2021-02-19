
const time = document.getElementById('time');
const currentDate = document.getElementById('date')
//const changeButton = document.getElementById("switch");
let militaryTime = false;

let timeUpdate= function() {
    
    let date= new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let half = "AM"
    
    if(hrs < 10){
        hrs = '0' + hrs 
        }
        if(min < 10){
         min = '0' + min;
        }
        if(sec < 10){
         sec = '0' + sec;
         }
               

if(militaryTime){
    
    time.textContent = hrs + ':' + min + ':' + sec 
}
else {
    let standardTime = hrs -12
   
    if(hrs > 12){
    hrs = hrs - 12;
    half = "PM"
    }
    
    if(hrs < 10){
        hrs = '0' + hrs 
        }
     time.textContent = hrs + ':' + min + ':' + sec + ' ' + half;

    }
};

let switchTime = function() {
    militaryTime = !militaryTime;
}

time.addEventListener('mouseover', switchTime);
time.addEventListener('mouseout', switchTime);

setInterval(timeUpdate, 1000);