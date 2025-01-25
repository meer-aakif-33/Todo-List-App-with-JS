/*
Main idea in making wensites using JS
1.Save the data
2.Generate the HTML
3.Make it interactive
*/

const todoList = JSON.parse(localStorage.getItem('tasks')) || [{
    task: 'make dinner',
    dueDate: '2022-12-22'},
    {
    task: 'wash dishes',
    dueDate: '2022-12-22'},
    {
    task: 'make dinner',
    dueDate: '2022-12-22'}

];

function renderTodoList() {
    let todoListHTML = '';

    for (let index = 0; index < todoList.length; index++) {
        const todoObject = todoList[index];

        //const task = todoObject.task;
        //const dueDate = todoObject.dueDate;
        //or below shortcut
        const { task, dueDate } = todoObject

        const html =`
            <div>${task}</div>

            <div>${dueDate}</div>

            <button onclick="
            todoList.splice(${index}, 1);
            renderTodoList();
            " class="delete-todo-button">
                Delete
            </button>
            `;

        todoListHTML += html;

        
    }
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
    //console.log(todoListHTML);
}

function addTodo() {
    const taskElement = document.querySelector('.js-todo-input')

    const dateInputElement = document.querySelector('.js-due-date-input');
    const task = taskElement.value;
    //console.log(name)
    const dueDate = dateInputElement.value

    todoList.push({
        task: task,
        dueDate: dueDate
    });

    //or like below
    // todoList.push({
    //     name,
    //     dueDate
    // })
    //console.log(todoList)

    taskElement.value = '';

    localStorage.setItem('tasks', JSON.stringify(todoList))


    renderTodoList();
}

function handleTodoKeydown(event) {
    //console.log(event.key)
    if (event.key === 'Enter') {
        addTodo();
    }
}

renderTodoList();


