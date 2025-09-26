const input = document.getElementById('input_to_list')
function toDolist(){
    const newDiv = document.createElement('p')
    newDiv.textContent = input.value
    let parentElement = document.getElementById('task_list')
    parentElement.appendChild(newDiv)
    input.value = ' '
    const newInput = document.createElement('input')
    newInput.type = 'checkbox'
    parentElement.appendChild(newInput)
    
function checkingBox(evt){
    if (evt.targer.newInput.checked){
        console.log('чекбокс отмечен')
    } else{
        onsole.log('чекбокс не отмечен')
    }  
}
}
