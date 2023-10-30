// Required dom variables
let promptName = prompt("Enter your name please! ")
let userName = document.querySelector("#myName")
let time = document.querySelector("#myClock")

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Assigning incoming name to the html page
userName.innerHTML = promptName

function showTime() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    time.innerHTML = `Today is day ${daysOfWeek[day]} and the time is ${hours}:${minutes}:${seconds}.`;
}

setInterval(showTime, 1000); // Her saniyede bir fonksiyonu çağırarak saat ve saniye güncellenir.