//insert date
var day = document.getElementById("currentDay");
var now = moment().format("MMMM Do YYYY");
day.innerHTML = now

//save
$("#saveBtn").on("click",function(){
    var input = document.getElementById("fiveAmTask");

    // console.log('This is the input ->')s
    console.log(input)

    var content = input.value;

    //console.log('This is the content ->')
    console.log(content)

    localStorage.setItem("storedStuff", JSON.stringify(content));
    var storedInput = localStorage.getItem("storedStuff")
    console.log("This is the stored input -> ", JSON.parse(storedInput));
});
//persist

//colors