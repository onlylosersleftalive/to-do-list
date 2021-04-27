//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');

//Event Listeners
toDoButton.addEventListener('click', addToDo);

//Functions
function addToDo(event){
      event.preventDefault();
      
      const toDoDiv = document.createElement('div');
      toDoDiv.classList.add('todo');
      const newToDo = document.createElement('li');
      newToDo.innerText = 'hey';
      newToDo.classList.add('todo-item');
      toDoDiv.appendChild(newToDo);

      const completedButton = document.createElement('button');
      completedButton.innerHTML = '<i class="fas fa-check"></i>';
      completedButton.classList.add('complete-btn');
      toDoDiv.appendChild(completedButton);
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
      deleteButton.classList.add('delete-btn');
      toDoDiv.appendChild(deleteButton);

      toDoList.appendChild(toDoDiv);

}