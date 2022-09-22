// localStorage.clear();
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
        for(let i = 0; i < todoArray.length; i++) {
            if (JSON.parse(todoArray[i]).id == e.target.id){
                todoArray.splice(i, 1);
                localStorage.setItem('todo', todoArray);
                init();
            }
        }
    }
});

function addAll(value) {
    const todoObject = {
        id: todoArray.length + 1,
        text: value
    };
    todoArray.push(JSON.stringify(todoObject));
    addTodo(value, todoArray.length);
    localStorage.setItem('todo', todoArray);
}

function addTodo(value, id) {
    todoSpan.innerHTML = value;
    todoDelete.id = id;
    let templateCopy = todoTemplate.cloneNode(true);
    todoUl.append(templateCopy);
}

function init() {
    const fromLocalStorage = localStorage.getItem('todo');
    if(fromLocalStorage) {
        todoArray = fromLocalStorage.replace(/},/g,'}  ').split('  ');
        let todoArrayParse = [];
        if (todoUl.innerHTML.trim().length !== 0){
            todoUl.innerHTML = '';
        }
        for(let i = 0; i < todoArray.length; i++) {
            todoArrayParse.push(JSON.parse(todoArray[i]));
            if (i === 0) {
                addTodo(todoArrayParse[i].text, 1);
                todoArrayParse[i].id = 1;
            } else {
                addTodo(todoArrayParse[i].text, todoArrayParse.length);
                todoArrayParse[i].id = todoArrayParse.length;
            }
        }
        todoArray.length = 0;
        for(let i = 0; i < todoArrayParse.length; i++) {
            todoArray.push(JSON.stringify(todoArrayParse[i]));
        }
        localStorage.setItem('todo', todoArray);
    }
}