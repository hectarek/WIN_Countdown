// JS for WIN Cohort Calculator
// Idea Cred goes out to Pernell Grant

//Grabbing the appropriate dates
let startDate = new Date("March 09, 2020").getTime();
let graduationDate = new Date("August 21, 2020").getTime();

//Arrays to represent the string version of the date
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayOfWeekNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

//Total duration of the class
let programDuration = graduationDate - startDate;

//Function to constantly refresh date and progress

let currentDate = new Date();

//Breaking up date so I can format it better.
let dayOfWeek = currentDate.getDay();
let month = currentDate.getMonth();
let date = currentDate.getDate();
let year = currentDate.getFullYear();

let dateFormat = dayOfWeekNames[dayOfWeek] + ", " + monthNames[month] + " " + date + ", " + year;

let timeLeft = graduationDate - currentDate.getTime();

let percentCompleted = 100 - (timeLeft / programDuration).toFixed(2) * 100;

console.log(percentCompleted);

let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
// let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

let dateElement = document.getElementById("date");
let daysElement = document.getElementById("day-num");
let daysHourElement = document.getElementById("hour-num");
let progress = document.getElementById("progress");

dateElement.textContent = dateFormat;

daysElement.textContent = days;

daysHourElement.textContent = hours;

progress.style.width = percentCompleted + "%";

// Finished Program

// Congrats to the WIN program!!