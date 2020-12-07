$(document).ready(function () { 
// select the text area 
let nineamTextArea = document.querySelector('#nineamTextArea')
let saveTextBtns = document.querySelectorAll('.saveTextBtn')
// $('#nineamTextArea')
    // set current Hour to a variable
    var curentHour = moment().hours()
    // create a current day var with a text value
    $('#currentDay').text(moment().format('dddd, MMM. Do YY'))

// grab any value that maybe in local storage
$('#9 .description').val(localStorage.getItem(9))
$('#10 .description').val(localStorage.getItem(10))
$('#11 .description').val(localStorage.getItem(11))
$('#12 .description').val(localStorage.getItem(12))
$('#1 .description').val(localStorage.getItem(1))
$('#2 .description').val(localStorage.getItem(2))
$('#3 .description').val(localStorage.getItem(3))
$('#4 .description').val(localStorage.getItem(4))
$('#5 .description').val(localStorage.getItem(5))

    //saveTextBtns.addEventListener("click", function(event) {
        $('.saveTextBtn').on('click', function () {
            console.log("you clicked"); 
            console.log(this)
            // grab the text value user types
            var userTask = $(this).siblings('.description').val()
            // grabs the value of the id
            var time = $(this).parent().attr('id')
            //var userTask = this.previousElementSibling.value
            console.log(userTask)
            // this sets the user date into local storage with a key of time var
            localStorage.setItem(time, userTask)                
        })               
    //});
//}







// access the text area value and save it to a variable
// nineamTextArea.value = userText

// Event Listeners for save buttons
// saveTextBtn.addEventListener('click', saveTextArea)
// J query add event listener version
//$('#saveBtn9am').on('click', saveTextArea)
// function saveTextArea (event) {
//     // log button clicked
//     let bns = document.getElementsByTagName("button");
    
// }


// access the data you want from localstorage
// let userText = JSON.parse(localStorage.getItem('userText'))

})

