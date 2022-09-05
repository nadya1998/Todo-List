// localStorage.clear();
const todoTemplate = document.querySelector('#todo-template').content,
      todo = todoTemplate.querySelector('.todo'),
      todoSpan = todoTemplate.querySelector('.todo__span'),
      todoDelete = todoTemplate.querySelector('.todo__delete'),
      todoInput = document.querySelector('.todo-add__input'),
      todoAdd = document.querySelector('.todo-add__button'),
      todoUl = document.querySelector('.todo-add__ul');

let todoArray = [];
let counter = 0;

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
        for(let i = 0; i < todoArray.length; i++) {
            if (JSON.parse(todoArray[i]).id == e.target.id){
                todoArray.splice(i, 1);
                localStorage.setItem('todo',todoArray);
            }
        }
    }
});

function addAll(value) {
    addTodo(value);
    const todoObject = {
        id: counter,
        text: value
    };
    counter++;
    todoArray.push(JSON.stringify(todoObject));
    localStorage.setItem('todo', todoArray);
}

function addTodo(value) {
    todoSpan.innerHTML = value;
    todoDelete.id = counter;
    let templateCopy = todoTemplate.cloneNode(true);
    todoUl.append(templateCopy);
}

function init() {
    const fromLocalStorage = localStorage.getItem('todo');
    if(fromLocalStorage) {
        todoArray = fromLocalStorage.replace(/},/g,'}  ').split('  ');
        const todoArrayParse = [];
        for(let i = 0; i < todoArray.length; i++) {
            todoArrayParse.push(JSON.parse(todoArray[i]));
            addTodo(todoArrayParse[i].text);
            todoArrayParse[i].id = counter;
            counter++;
        }
        todoArray = [];
        for(let i = 0; i < todoArrayParse.length; i++) {
            todoArray.push(JSON.stringify(todoArrayParse[i]));
        }
        localStorage.setItem('todo', todoArray);
    }
}