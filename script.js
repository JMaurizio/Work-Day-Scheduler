$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var currentTime = moment().hours();
var scheduleTime = $(".schedule").attr("id")
var divId = $("div").attr("id")

var save = $(".save")
save.on("click", function() {

    time = $(this).siblings(".time").text(),
    schedule = $(this).siblings(".schedule").val()

    localStorage.setItem(time, schedule)
    
});

function blockColor() {

    $(".schedule").each(function() {
    var hour = $(this).attr("id");
        if(currentTime > hour) {
            $(this).css("background-color","#ff6961")
            $(this).css("color", "white")
        }
        else if (currentTime == hour) {
            $(this).css("background-color","#FFFF8F")
        }
        else {
            $(this).css("background-color","#77dd77")
            $(this).css("color", "white")
        }

    });
};

blockColor()

$("#9AM .schedule").val(localStorage.getItem("9AM"))
$("#10AM .schedule").val(localStorage.getItem("10AM"))
$("#11AM .schedule").val(localStorage.getItem("11AM"))
$("#12PM .schedule").val(localStorage.getItem("12PM"))
$("#1PM .schedule").val(localStorage.getItem("1PM"))
$("#2PM .schedule").val(localStorage.getItem("2PM"))
$("#3PM .schedule").val(localStorage.getItem("3PM"))
$("#4PM .schedule").val(localStorage.getItem("4PM"))
$("#5PM .schedule").val(localStorage.getItem("5PM"))