$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var currentTime = moment().hours();
var scheduleTime = $(".schedule").attr("id")
var scheduledEvents = [];

var save = $(".save")
save.on("click", function() {
    var scheduleData = {
        time: $(this).siblings(".time").text(),
        schedule: $(this).siblings(".schedule").val()
    }    
    localStorage.setItem("scheduleData", JSON.stringify(scheduleData))
    scheduledEvents.push(scheduleData)
    localStorage.setItem("scheduledEvents", JSON.stringify(scheduledEvents))
});

function returnPlaner() {
    $(".schedule").each(function() {
        if(scheduleTime = currentTime)
            $(this).text(JSON.parse(localStorage.getItem("scheduledEvents")))
            console.log(JSON.parse(localStorage.getItem("scheduledEvents")))
    })    
}

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
returnPlaner()