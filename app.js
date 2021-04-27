//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');

//Event Listeners
toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', removeToDoItem);

//Functions
function addToDo(event) {
      event.preventDefault();
      
      const toDoDiv = document.createElement('div');
      toDoDiv.classList.add('todo');

      const newToDoItem = document.createElement('li');
      newToDoItem.innerText = toDoInput.value;
      newToDoItem.classList.add('todo-item');
      toDoDiv.appendChild(newToDoItem);

      const completedButton = document.createElement('button');
      completedButton.innerHTML = '<i class="fas fa-check"></i>';
      completedButton.classList.add('completed-btn');
      toDoDiv.appendChild(completedButton);

      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
      deleteButton.classList.add('delete-btn');
      toDoDiv.appendChild(deleteButton);

      toDoList.appendChild(toDoDiv);
      toDoInput.value = "";

}

function removeToDoItem(event) {
    const item = event.target;
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
    if (item.classList[0] === "completed-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed"); 
    }
}