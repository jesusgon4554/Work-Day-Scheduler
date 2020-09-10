//insert date

var input = 

window.onload = function(){
    var day = document.getElementById("currentDay");
    var now = moment().format("MMMM Do YYYY");
    day.innerHTML = now
    
    // one liner
    document.getElementById("5amTask").value = JSON.parse(localStorage.getItem("5am"))

    document.getElementById("6amTask").value = JSON.parse(localStorage.getItem("6am"))
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

//colors