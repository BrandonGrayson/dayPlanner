// select the text area 
let nineamTextArea = document.querySelector('#nineamTextArea')
let saveTextBtns = document.querySelectorAll('.saveTextBtn')
// $('#nineamTextArea')

// set an event listener for all the buttons
for (i = 0; i < saveTextBtns.length; i++) {
    saveTextBtns[i].addEventListener("click", function() {
        console.log("you clicked"); 
    });
}

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

// 
// if (userText) {
//     console.log('a value was received')
// } else {
//     console.log('we did not get a value')
// }