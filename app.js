// Declaring Variables

let inputbtn = document.getElementById('input-but');
let addBtn = document.getElementById('add-button');
let list = document.getElementById('text');
addBtn.addEventListener('click', getVal)
// Adding Function to Add New task  

function getVal() {
    let value = inputbtn.value;
    if (value === "") {
        alert("Please fill out this field.")
    }
    else {
        let newElement = document.createElement('li')
        let liText = document.createTextNode(value)
        newElement.appendChild(liText)
        list.appendChild(newElement)

        // Removing Task by double click on the list item

        newElement.ondblclick=(e)=>newElement.remove()

        // Highlighting list item on click
        
        newElement.addEventListener('click', highLighter)
        function highLighter(){
            newElement.style.backgroundColor = 'gray'
        }
    }
    document.myForm.reset()
}





