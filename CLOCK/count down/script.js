var month = document.getElementById("month")
var days = document.getElementById("days")
var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var second = document.getElementById("second")


var eidday = new Date("june 16 2024");

eidday = eidday.getTime("june 16 2024")

setInterval(function(){

    var now = new Date()

    now = now.getTime()

    var diff = eidday-now


    var monthsleft =  Math.floor(diff / 1000 / 60 / 60 / 24 / 30)
    
    console.log(monthsleft);

    var daysleft = Math.floor(diff/ 1000 / 60 / 60 / 24)

    console.log(daysleft);

    var hoursleft = Math.floor(diff / 1000 / 60 / 60)

    console.log(hoursleft);

    var minutesleft = Math.floor(diff / 1000 / 60)

    console.log(minutesleft);

    var secondleft = Math.floor(diff / 1000)

    console.log(secondleft);



      month.innerText =  "MONTH"+ "\n" + monthsleft ;

      

      days.innerText = "DAYS" +  "\n" + daysleft;

      hours.innerText = "HOURS"+ "\n" + hoursleft;

      minutes.innerText = "MINUTES"+ "\n" + minutesleft;

      second.innerText = "SECOND" + "\n" + secondleft;


},1000)

