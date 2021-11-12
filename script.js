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

    $(".schedule").each(function() {
    var hour = $(this).attr("id");
        if(currentTime > hour) {
            $(this).css("background-color","red")
            $(this).css("color","white")
        }
        else if (currentTime == hour) {
            $(this).css("background-color","yellow")
            $(this).css("color","white")
        }
        else {
            $(this).css("background-color","green")
            $(this).css("color","white")
        }
    });
};

blockColor()