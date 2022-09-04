const todoTemplate = document.querySelector('#todo-template').content,
      todo = todoTemplate.querySelector('.todo'),
      todoSpan = todoTemplate.querySelector('.todo__span'),
      todoDelete = todoTemplate.querySelector('.todo__delete'),
      todoInput = document.querySelector('.todo-add__input'),
      todoAdd = document.querySelector('.todo-add__button'),
      todoUl = document.querySelector('.todo-add__ul');

let todoArray = [];

init();

todoAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if (todoInput.value){
        const value = todoInput.value;
        addAll(value);
        todoInput.value ='';
    }
});

todoUl.addEventListener('click', (e) => {
    if(e.target.classList.contains('todo__delete')) {
        e.target.parentNode.remove();
    }
});

function addAll(value) {
    addTodo(value);
    todoArray.push(value);
    console.log(todoArray);
    localStorage.setItem('todo', todoArray);
}

function addTodo(value){
    todoSpan.innerHTML = value;
    let templateCopy = todoTemplate.cloneNode(true);
    todoUl.append(templateCopy);
}

function init() {
    const fromLocalStorage = localStorage.getItem('todo');
    if(fromLocalStorage) {
        todoArray = fromLocalStorage.split(',');
        console.log(todoArray);
        for(let i = 0; i < todoArray.length; i++) {
            addTodo(todoArray[i]);
        }
    }
}

// localStorage.clear();
