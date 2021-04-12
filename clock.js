function displayTime() {
    let h = document.querySelector("#h");
    let m = document.querySelector("#m");
    let s = document.querySelector("#s");
    let day = document.querySelector("#day");
    let now = new Date();
    //clock.textContent = now.toLocaleTimeString(); 
    h.textContent = now.getHours();
    m.textContent = now.getMinutes();
    s.textContent = now.getSeconds();
    

    switch (now.getDay()) {
        case 0:
            // code block
            day.textContent  = "Sunday"; 

            break;
        case 1:
            // code block
            day.textContent = "Monday";
            break;
        case 2:
            // code block
            day.textContent  = "Tuesday";
            break;
        case 3:
            // code block
            day.textContent  = "Wednesday";
            break;
        case 4:
            // code block
            day.textContent  = "Thursday";
            break;
        case 5:
            // code block
            day.textContent = "Friday";
            break;
        case 6:
            // code block
            day.textContent = "Saturday";
            break;

    }
}
displayTime(); 

setInterval(displayTime, 1000);
