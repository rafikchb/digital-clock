function displayTime(){
    let clock = document.querySelector("#clock");
    let now = new Date();
    clock.textContent = now.toLocaleTimeString(); 
    
}
function timesnpshot (){
    return document.querySelector("#clock").textContent;
}
clock.addEventListener("click", timesnpshot); 
displayTime(); 
setInterval(displayTime, 1000);
