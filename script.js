$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var currentTime = moment().hours();
var scheduledEvents = [];

var save = $(".save")
save.on("click", function() {
    var scheduleData = {
        time: $(".time").text(),
        schedule: $(".schedule").val()
    }    
    localStorage.setItem("scheduleData", JSON.stringify(scheduleData))
    scheduledEvents.push(scheduleData)
});

function blockColor() {
    var hour = $(".planner-block").attr("id");
    
    if(currentTime > hour) {
        $(this).css("background-color","red")
    }
    else if (currentTime == hour) {
        $(this).css("background-color","yellow")
    }
    else {
        $(this).css("background-color","green")
    }
}

blockColor()
