let hrs_angle, second_angle, minute_angle;

const base = document.getElementById("numberWrapper");

function setNumbers() {
    for (let i = 1; i <= 12; i++) {
        const k = document.createElement("div");
        k.classList.add("numbers");
        if ([3, 6, 9, 12].includes(i)) {
            k.style.height = "7vw";
            k.style.width = "3vw";
        } else {
            k.style.height = "4vw";
            k.style.width = "1.8vw";
        }
        k.style.transform = `rotate(${i * 30}deg) translateY(-40vw)`;
        base.appendChild(k);
    }
}
setNumbers();

function rotate() {
    const now = new Date();
    let hrs = now.getHours(); 
    
    const mins = now.getMinutes();
    const secs = now.getSeconds();
    if (hrs > 12) hrs -= 12; //This works for hrs=13 to 23
   else if(hrs==0) hrs=12; 
   /*This is because at midnight the now.getHours() returns 0 */
    const tot_sec = hrs * 3600 + mins * 60 + secs;

    hrs_angle = tot_sec / 120;
    minute_angle = mins * 6 + secs * 0.1;
    second_angle = secs * 6;
    
    setAngle("--hour_angle",hrs_angle);
    setAngle("--minute_angle",minute_angle);
    setAngle("--second_angle",second_angle);
    requestAnimationFrame(rotate);
}
rotate();


function setAngle(variable, angle) {
    document.documentElement.style.setProperty(variable, angle + "deg");
}


