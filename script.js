let input = document.getElementById('input_to_list')

function toDoList() {
    let newDiv = document.createElement('p');
    newDiv.textContent = input.value;
    let parentElement = document.getElementById('task_list')
    parentElement.appendChild(newDiv);
    input.value = ' ';
    let newInput = document.createElement('input');
    newInput.type = 'checkbox';
    parentElement.appendChild(newInput); 
    newInput.addEventListener('click', function(evt){
        let checkbox = evt.target
        if (checkbox.checked) {
            newDiv.style.textDecoration = 'line-through';
        } else {
            newDiv.style.textDecoration = 'none';
        }   
    });
}

