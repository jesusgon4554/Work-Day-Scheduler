import moment from 'moment';

const moment = require("./moment");

//insert date
var day = document.getElementById("currentDay");
var now = moment().format();
day.innerHTML(now);

// var saveFive = document.getElementById("hourFive");
// var = document.getElementsbyClass("");
//save

$("#hourFive").on("click", function(){
    var SaveBtn = document.getElementsById("hourFive");
    localStorage.setItem("task", SaveBtn.inputValue());
})    

function getValue(){
    return localStorage.getItem("task");
}

//persist

//colors