const body = document.querySelector("body"),
hourHand = document.querySelector(".hour"),
minuteHand = document.querySelector(".minute"),
secondHand = document.querySelector(".second"),
darkMode = document.querySelector(".mode-switch"),
shadowClock = document.querySelector(".clock"),
darkHour = document.querySelector(".hour");



darkMode.addEventListener("click", ()=> {
    body.classList.toggle("dark");

    shadowClock.classList.toggle("dark_clock");
    darkHour.classList.toggle("dark_hour");
    darkMode.classList.toggle("dark_button");

    const isDarkMode = body.classList.contains("dark");
    darkMode.textContent = isDarkMode ? "Light Mode" : "Dark Mode"; 

    localStorage.setItem("MOD", isDarkMode ? "Karanlık Mod" :"Aydınlık Mod" );
})

if(localStorage.getItem("MOD") === "Dark Mode") {
    
    body.classList.add("dark");       
    shadowClock.classList.add("dark_clock");
    darkHour.classList.add("dark_hour");    
    darkMode.classList.add("dark_button");
    darkMode.textContent = "Light Mode";
}

const updateTime = () => { 
    let date = new Date(); 
    secondTodegree = (date.getSeconds()/60)*360; 
    minuteTodegree = (date.getMinutes()/60)*360; 
    hourTodegree   = (date.getHours()/12)*360;   

    secondHand.style.transform = `rotate(${secondTodegree}deg)`,
    minuteHand.style.transform = `rotate(${minuteTodegree}deg)`,
    hourHand.style.transform = `rotate(${hourTodegree}deg)`;
}
setInterval(updateTime,1000); 


