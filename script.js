// JS for WIN Cohort Calculator 

//Grabbing the appropriate dates
var startDate = new Date("March 09, 2020").getTime();
var graduationDate = new Date("September 04, 2020").getTime();

//Total duration of the class
var programDuration = graduationDate - startDate;

//Function to constantly refresh date and progress
var x = setInterval(() => {

    var currentDate = new Date();

    var timeLeft = graduationDate - currentDate.getTime();

    var percentCompleted = 100 - ((timeLeft/programDuration).toFixed(2) * 100);

    console.log(percentCompleted)

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    var dateElement = document.getElementById("date")
    var daysElement = document.getElementById("day-num")
    var daysHourElement = document.getElementById("hour-num")
    var progress = document.getElementById("progress")

    dateElement.textContent = currentDate.toDateString();

    daysElement.textContent = days;

    daysHourElement.textContent = hours

    progress.style.width = percentCompleted + "%"

    if (timeLeft < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "Yay! We did it!";
      }

}, 1000);



