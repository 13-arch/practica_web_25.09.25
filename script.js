let clearDataButton = document.getElementById('clearData')
let inputToList = document.getElementById('input_to_list')
let addButton = document.getElementById('addButton')
let tasksList = document.getElementById('tasks_list')

function addTask() {
    let task = document.createElement('div');
    tasksList.append(task);

    let check = document.createElement('input');
    check.type = 'checkbox';
    task.append(check);
    check.classList.add('check')

    let taskText = document.createElement('p');
    taskText.textContent = inputToList.value;
    task.append(taskText);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    task.append(deleteButton);
    deleteButton.classList.add('del') 

    let editButton = document.createElement('button');
    editButton.textContent = "Edit";
    task.append(editButton);
    editButton.classList.add('red')

    inputToList.value = '';

    savedTask();
}
addButton.addEventListener('click', addTask);

function changeTask(e){
    if(e.target.tagName === 'INPUT'){
        e.target.parentElement.classList.toggle('checked');
        savedTask()
    } else if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Delete') {
        e.target.parentElement.remove()
        
        savedTask()
    } else if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Edit') {
        let taskDiv = e.target.parentElement;
        let taskText = taskDiv.querySelector('p');

        taskText.style.display = 'none';
        e.target.style.display = 'none';
        let deleteBtn = taskDiv.querySelector('button:nth-of-type(1)');
        deleteBtn.style.display = 'none';
        let checkbox = taskDiv.querySelector('input[type="checkbox"]');
        checkbox.style.display = 'none';
        let editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = taskText.textContent;
        editInput.classList.add('edit-input');
        taskDiv.appendChild(editInput);

        let saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.classList.add('save-btn');
        taskDiv.appendChild(saveBtn);

        saveBtn.addEventListener('click', function () {
            taskText.textContent = editInput.value;
            taskText.style.display = 'block';
            e.target.style.display = 'inline-block';
            deleteBtn.style.display = 'inline-block';
            checkbox.style.display = 'inline-block';

            editInput.remove();
            saveBtn.remove();
        savedTask()
    })}
}
tasksList.addEventListener('click', changeTask);



function savedTask(){
    localStorage.setItem('data', tasksList.innerHTML);
}
function showTask(){    
    tasksList.innerHTML = localStorage.getItem('data')
}
function clearData() {
    localStorage.clear();
}
clearDataButton.addEventListener('click', clearData)

showTask()

