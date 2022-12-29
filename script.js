const monthEl = document.getElementById("month-name")
const weekDayEl = document.getElementById("weekday")
const dayEl = document.getElementById("day")
const yearEl = document.getElementById("year")

const date = new Date();
monthEl.innerText = date.toLocaleString("en",{
    month: "long"
});
weekDayEl.innerText = date.toLocaleString("en",{
   weekday: "long" 
})
dayEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
