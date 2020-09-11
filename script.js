//insert date
window.onload = function(){
    var day = document.getElementById("currentDay");
    var now = moment().format("MMMM Do YYYY");
    day.innerHTML = now
    
    // one liner
    document.getElementById("5amTask").value = JSON.parse(localStorage.getItem("5am"))
    document.getElementById("6amTask").value = JSON.parse(localStorage.getItem("6am"))
    document.getElementById("7amTask").value = JSON.parse(localStorage.getItem("7am"))
    document.getElementById("8amTask").value = JSON.parse(localStorage.getItem("8am"))
    document.getElementById("9amTask").value = JSON.parse(localStorage.getItem("9am"))
    document.getElementById("10amTask").value = JSON.parse(localStorage.getItem("10am"))
    document.getElementById("11amTask").value = JSON.parse(localStorage.getItem("11am"))
    document.getElementById("12pmTask").value = JSON.parse(localStorage.getItem("12pm"))
    document.getElementById("1pmTask").value = JSON.parse(localStorage.getItem("1pm"))
    document.getElementById("2pmTask").value = JSON.parse(localStorage.getItem("2pm"))
    document.getElementById("3pmTask").value = JSON.parse(localStorage.getItem("3pm"))
    document.getElementById("4pmTask").value = JSON.parse(localStorage.getItem("4pm"))
    document.getElementById("5pmTask").value = JSON.parse(localStorage.getItem("5pm"))
}

// single function, filter using ID of the target element 
$('button').click(function(e) {
    console.log(e.target.id)
    switch(e.target.id){
        case "5am":
            var content = document.getElementById("5amTask").value
            localStorage.setItem("5am", JSON.stringify(content));
            break;
        case "6am":
            var content = document.getElementById("6amTask").value
            localStorage.setItem("6am", JSON.stringify(content));
            break; 
        case "7am":
            var content = document.getElementById("7amTask").value
            localStorage.setItem("7am", JSON.stringify(content));
            break;
        case "8am":
            var content = document.getElementById("8amTask").value
            localStorage.setItem("8am", JSON.stringify(content));
            break;
        case "9am":
            var content = document.getElementById("9amTask").value
            localStorage.setItem("9am", JSON.stringify(content));
            break;
        case "10am":
            var content = document.getElementById("10amTask").value
            localStorage.setItem("10am", JSON.stringify(content));
            break;
        case "11am":
            var content = document.getElementById("11amTask").value
            localStorage.setItem("11am", JSON.stringify(content));
            break;
        case "12pm":
            var content = document.getElementById("12pmTask").value
            localStorage.setItem("12pm", JSON.stringify(content));
            break;
        case "1pm":
            var content = document.getElementById("1pmTask").value
            localStorage.setItem("1pm", JSON.stringify(content));
            break;
        case "2pm":
            var content = document.getElementById("2pmTask").value
            localStorage.setItem("2pm", JSON.stringify(content));
            break;
        case "3pm":
            var content = document.getElementById("3pmTask").value
            localStorage.setItem("3pm", JSON.stringify(content));
            break;
        case "4pm":
            var content = document.getElementById("4pmTask").value
            localStorage.setItem("4pm", JSON.stringify(content));
            break;
        case "5pm":
            var content = document.getElementById("5pmTask").value
            localStorage.setItem("5pm", JSON.stringify(content));
            break;
    }
})

//save
$("#saveBtn").on("click",function(){
    

    // console.log('This is the input ->')s
    console.log(input)

    var content = input.value;

    //console.log('This is the content ->')
    console.log(content)

    localStorage.setItem("storedStuff", JSON.stringify(content));

});

//colors with hours
// var hour = moment().hour()

$(".hour5").attr("data-time")
const now = moment();
console.log(now);
console.log(now.hour());

    if(now.hour() === 5){
        $(".hour5").css("background-color", "lightgreen")
    }else if(now.hour()< 5){
        $(".hour5").css("background-color", "lightyellow")
    }else{
        $(".hour5").css("background-color", "pink")
    }

$(".hour6").attr("data-time")

    if(now.hour() === 6){
        $(".hour6").css("background-color", "lightgreen")
    }else if(now.hour()< 6){
        $(".hour6").css("background-color", "lightyellow")
    }else{
        $(".hour6").css("background-color", "pink")
    }
$(".hour7").attr("data-time")
    if(now.hour() === 7){
        $(".hour7").css("background-color", "lightgreen")
    }else if(now.hour()< 7){
        $(".hour7").css("background-color", "lightyellow")
    }else{
        $(".hour7").css("background-color", "pink")
    }

$(".hour8").attr("data-time")
    if(now.hour() === 8){
        $(".hour8").css("background-color", "lightgreen")
    }else if(now.hour()< 8){
        $(".hour8").css("background-color", "lightyellow")
    }else{
        $(".hour8").css("background-color", "pink")
    }

$(".hour9").attr("data-time")
    if(now.hour() === 9){
        $(".hour9").css("background-color", "lightgreen")
    }else if(now.hour()< 9){
        $(".hour9").css("background-color", "lightlightyellow")
    }else{
        $(".hour9").css("background-color", "pink")
    }

$(".hour10").attr("data-time")
    if(now.hour() === 10){
        $(".hour10").css("background-color", "lightgreen")
    }else if(now.hour() < 10){
        $(".hour10").css("background-color", "lightyellow")
    }else{
        $(".hour10").css("background-color", "pink")
    }

$(".hour11").attr("data-time")
    if(now.hour() === 11){
        $(".hour11").css("background-color", "lightgreen")
    }else if(now.hour() < 11){
        $(".hour11").css("background-color", "lightyellow")
    }else{
        $(".hour11").css("background-color", "pink")
    }

$(".hour12").attr("data-time")
    if(now.hour() === 12){
        $(".hour12").css("background-color", "lightgreen")
    }else if(now.hour() < 12){
        $(".hour12").css("background-color", "lightyellow")
    }else{
        $(".hour12").css("background-color", "pink")
    }

$(".hour1").attr("data-time")
    if(now.hour() === 13){
        $(".hour13").css("background-color", "lightgreen")
    }else if(now.hour() < 13){
        $(".hour13").css("background-color", "lightyellow")
    }else{
        $(".hour13").css("background-color", "pink")
    }

$(".hour2").attr("data-time")
    if(now.hour() === 14){
        $(".hour14").css("background-color", "lightgreen")
    }else if(now.hour() < 14){
        $(".hour14").css("background-color", "lightyellow")
    }else{
        $(".hour14").css("background-color", "pink")
    }

$(".hour3").attr("data-time")
    if(now.hour() === 15){
        $(".hour15").css("background-color", "lightgreen")
    }else if(now.hour() < 15){
        $(".hour15").css("background-color", "lightyellow")
    }else{
        $(".hour15").css("background-color", "pink")
    }

$(".hour4").attr("data-time")
    if(now.hour() === 16){
        $(".hour16").css("background-color", "lightgreen")
    }else if(now.hour() < 16){
        $(".hour16").css("background-color", "lightyellow")
    }else{
        $(".hour16").css("background-color", "pink")
    }

$(".hourpm").attr("data-time")
    if(now.hour() === 17){
        $(".hour17").css("background-color", "lightgreen")
    }else if(now.hour() < 17){
        $(".hour17").css("background-color", "lightyellow")
    }else{
        $(".hour17").css("background-color", "pink")
    }