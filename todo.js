// to do application...

// select Element and assgin them to variable....

let form = document.querySelector('form');
let newTask = document.querySelector('#new-task');
let ToDoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-box ul');

// create function.....

let createTask = function(task) {

    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.className = 'check'
    let label = document.createElement('label');

    label.innerHTML = task;
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;

}

let addTask = function(e) {
    e.preventDefault();
    let listItem = createTask(newTask.value);
    ToDoUl.appendChild(listItem);
    newTask.value = "";

    // Bind the new list Item to the incomplete list...
    BindIncompleteListItem(listItem, completeTask);
}

let completeTask = function() {
    let listItem = this.parentNode;

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'Delete';
    deleteBtn.innerText = 'Remove';

    listItem.appendChild(deleteBtn);

    let checkbox = listItem.querySelector('.check');
    checkbox.remove();
    completeUl.appendChild(listItem);
    BindcompleteListItem(listItem, deleteTask)

}
let deleteTask = function() {

    let listItem = this.parentNode;
    let Ul = listItem.parentNode;

    Ul.removeChild(listItem);
    console.log("list" + listItem);

}


// create function bind checkbox Incomplete List.....

let BindIncompleteListItem = function(taskItem, clickBox) {
    let checkbox = listItem.querySelector('.check');
    checkbox.onChange = clickBox;


}
let BindcompleteListItem = function(taskItem, deleteBtnClick) {
    let deleteItem = document.querySelector('.Delete')
    deleteItem.onclick = deleteBtnClick;


}


form.addEventListener('submit', addTask);





// Not SuccessFull...