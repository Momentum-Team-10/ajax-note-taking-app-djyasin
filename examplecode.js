
const todoList = document.getElementById('todo-list')
//this declares the text within the list
const form = document.querySelector (#todo-form)
//this calls the form itself

form.addEventListener ('submit', (e) => {
    e.preventDefault()
    //e is event abbreviated res is response
    const todoText = document.getElementById ('todo-text').value 
    console.log(todoText)
    createTodo(todoTest)
})
//this is the event listener for when the input is submitted

todo.addEventListener('click', (e) => { 
    if (e.target.classlist.contains('delete')) {
        console.log(todoText)
        createTodo(todoText)
        form.reset()
    }

})
//this is the event listener for the delete button.
//It will removee text from the list
//status code you want to get back is a 201 created
function listTodos() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for (let item of data) {
                renderTodoItem(item)
            }
        })
}
//this is the function that actually posts the text to the list

function renderTodoItem(todoObj) {
    const li = document.createElement('li')
    li.id = todoObj.id
    li.classList.add(
        // These strings are TACHYONS class names
        'lh-copy',
        'pv3',
        'ba',
        'bl-0',
        'bt-0',
        'br-0',
        'b--dotted',
        'b--black-3'
    )

    renderTodoText(li, todoObj)
    todoList.appendChild(li)
}
//this creates the list icons

function renderTodoText(li, todoObj) {
    li.innerHTML = `
    <span class="dib w-60">${todoObj.body}</span>
    <i class="ml2 dark-red fas fa-times delete"></i><i class="ml3 fas fa-edit edit"></i>
    `
}
//these are icons to which we will add button functions to delet and add items in my ui.
function createTodo(todo) {
    fetch(url,{
        method: 'POST'
        headers: {'Content-Type': 'application/json', Authorization: 'Token '},
        body: JSON.stringify({
            title: TodoText.
            body: todoText,
            created_at: moment().format()
        })
    })
    .then(res => res.json())
    .then(data => renderTodoItem(data))
}
//this creates this list/post text from the input box

function deleteTodo(todoEl) {
    fetch(url + '/' `$(todoEl.id)`, {
    method: 'DELETE'
    }).then(() => todoEl.ParentElement.remove())
}
//function to handle delete fetch request
//have to concatenate to get specific object
function updateTodo(todoEl)
    const todoText = document.getElementById('todo-text').value
    fetch(url + '/' `${todoEl.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: todoText,
            body: todoText,
            updated_at: moment().format()
        })
    }
    )


    function updateNote(noteEl) {
        const noteText = document.getElementById('note-text').value;
        fetch(url + '/' + `${noteEl.parentElement.parentElement.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: noteText,
                body: noteText,
                updated_at: moment().format(),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                renderNoteText(noteEl.parentElement.parentElement, data);
            }      
//this is the edit feature for the list
listTodos()
