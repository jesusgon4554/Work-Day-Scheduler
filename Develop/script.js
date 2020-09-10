//insert date
var day = document.getElementById("currentDay");
var now = moment().format("MMMM Do YYYY");
day.innerHTML = now
day.innerHTML = "<p>" + now + "<p>"
// var = document.getElementsbyClass("");

//save

// $("#saveBtn").on("click",function(){
//     var input = document.getElementById("fiveAmTask");
//     localStorage.setItem("input", JSON.stringify(input));
//     var storedInput = localStorage.getItem("todo")
//     var storedInput = localStorage.getItem("input")
//     console.log("storedInput",JSON.parse(storedInput));
//     console.log(storedInput)
// });
// $("#saveBtn").on("click",function(){
//     var input = document.getElementById("fiveAmTask");
//     var content = input.innerHTML;
//     localStorage.setItem("storedStuff", JSON.stringify(content));
//     var storedInput = localStorage.getItem("storedStuff")
//     console.log("storedInput", JSON.parse(storedInput));
// });
$("#saveBtn").on("click",function(){
    var input = document.getElementById("fiveAmTask");
    var content = input.innerHTML;
    localStorage.setItem("storedStuff", JSON.stringify(content));
    var storedInput = localStorage.getItem("storedStuff")
    console.log("storedInput", JSON.parse(storedInput));
});

console.log(content)

//persist

//colors