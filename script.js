// select the text area 
let nineamTextArea = document.querySelector('#nineamTextArea')
// $('#nineamTextArea')

// access the data you want from localstorage
let userText = JSON.parse(localStorage.getItem('userText'))

// 
if (userText) {
    console.log(userText)
} else {
    console.log('we did not get a value')
}

// access the text area value and save it to a variable
nineamTextArea.textContent = userText

// Event Listeners for save buttons
saveBtn9am.addEventListener('click', saveTextArea)
// J query add event listener version
//$('#saveBtn9am').on('click', saveTextArea)

function saveTextArea () {
    // log button clicked
    console.log('button was clicked')
    // save it to local storage
    // access the text area value and save it to a variable
    nineamTextArea.textContent = userText
    localStorage.setItem('userText', userText)
}

