// We need 3 thingg: Input Value, Button Interaction and the List to write the Tasks
const inputField = document.querySelector('input');
const addButton = document.querySelector('button');
const list = document.getElementById('list');

// Add Button interaction when pressed
addButton.addEventListener('click', (event) => {
    // Cancels the Default Action
    event.preventDefault();

    // If the user does not write anything, an alert box will pop up
    if (inputField.value == '') {
        alert('You have to type something');
    // If the user writes something, we will create an <h4> with the Input Value and return the Input Value to none
    }else {
        // Creates a <h4>
        const h4 = document.createElement('h4');
        // Add the <h4> to the <div>
        list.appendChild(h4);
        // Takes the CSS style from listBox
        h4.className = 'listBox';
        // Change the value to Input Value
        h4.textContent = inputField.value;
        // Adds the OK <button> to the <h4>
        h4.appendChild(addDoneButton());
        // Adds the delete <button> to the <h4>
        h4.appendChild(addDeleteButton());
        // Returns the Input to none
        inputField.value = '';
    }
})

// Click Add Button when Enter pressed
inputField.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        event.preventDefault();
        addButton.click();
    }
})

// Creates a new <button>
const addDeleteButton = () => {
    const deleteButton = document.createElement('button');
    // Change the value to X
    deleteButton.textContent = 'X';
    // Takes the CSS style from deleteButton
    deleteButton.className = 'deleteButton'

    // Delete Button interaction when pressed
    deleteButton.addEventListener('click', (event) => {
        // Takes the value of the parent (<h4> in this case)
        const task = event.target.parentElement;
        // Removes the child (<h4> in this case)
        list.removeChild(task);
    })
    // Returns the <button>
    return deleteButton
}

// Creates a new <button>
const addDoneButton = () => {
    const doneButton = document.createElement('button');
    // Change the value to OK
    doneButton.textContent = 'OK';
    // Takes the CSS style from doneButton
    doneButton.className = 'doneButton'

    // done Button interaction when pressed
    doneButton.addEventListener('click', (event) => {
        // Takes the value of the parent (<h4> in this case)
        const task1 = event.target.parentElement;
        // Adds a line-through (<h4> in this case)
        task1.style.textDecoration = 'line-through';
    })
    // Returns the <button>
    return doneButton
}