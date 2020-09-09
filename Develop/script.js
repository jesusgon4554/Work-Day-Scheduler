//insert date
var day = document.getElementById("currentDay");
var now = moment().format("MMMM Do YYYY");
day.innerHTML = now
day.innerHTML = "<p>" + now + "<p>"
// var = document.getElementsbyClass("");
//save
var saveFive = document.getElementById("hourFive");

$("#hourFive").on("click", function(event){
    event.preventDefault();
    var SaveBtn = document.getElementsById("hourFive");
    localStorage.setItem("task", SaveBtn.inputValue());
})    

function getValue(){
    return localStorage.getItem("task");
}

//persist

//colors