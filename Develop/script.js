//insert date
var day = document.getElementById("currentDay");
var now = moment().format("MMMM Do YYYY");
day.innerHTML = now
day.innerHTML = "<p>" + now + "<p>"
// var = document.getElementsbyClass("");

//save

$("#saveBtn").on("click",function(){
    var input = document.getElementById("fiveAmTask");
    localStorage.setItem("todo", input);
    var storedInput = localStorage.getItem("task")
    console.log(storedInput);

});



//persist

//colors