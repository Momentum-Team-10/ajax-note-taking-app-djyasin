const url = 'http://localhost:
//get this from somewhere

fetch (url)

function listToDos() {
    fetch(url)
    .then(res => res.json())
    .then (data =>
    for (let item of data) {
        renderToDoItem(item)
    })
}

function renderToDoItem(todoObj) {
    const li = document.createElement('li')
    li.id =toDoObj.idli.classList.add (
        'lh-copy',
        'pv3',
        'ba',
        'bl-0'
        'bt-0',
        'br-0',
        

    )
}