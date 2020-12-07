// select the text area 
let nineamTextArea = document.querySelector('#nineamTextArea')
let saveTextBtn = document.querySelector('.saveTextBtn')
// $('#nineamTextArea')

// access the data you want from localstorage
let userText = JSON.parse(localStorage.getItem('userText'))

// 
if (userText) {
    console.log('a value was received')
} else {
    console.log('we did not get a value')
}

// access the text area value and save it to a variable
nineamTextArea.value = userText

// Event Listeners for save buttons
saveTextBtn.addEventListener('click', saveTextArea)
// J query add event listener version
//$('#saveBtn9am').on('click', saveTextArea)

function saveTextArea () {
    // log button clicked
    console.log('button was clicked')

}

