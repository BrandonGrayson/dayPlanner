// select the text area 

let nineamTextArea = document.querySelector('#nineamTextArea')
let saveTextBtns = document.querySelectorAll('.saveTextBtn')
// $('#nineamTextArea')

// set an event listener for all the buttons
for (i = 0; i < saveTextBtns.length; i++) {
    saveTextBtns[i].addEventListener("click", function(event) {
        console.log("you clicked"); 
        // this is button that was clicked
        console.log(event.target)
        console.log(this)
        // access the sibling element on the event that was clicked
        let prevSibling = event.target.previousElementsSibling
        // $(this).siblings()
        console.log(prevSibling)
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

