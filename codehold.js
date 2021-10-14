let root = document.getElementById('root')
/* globals fetch, moment */
const url = 'http://localhost:3000/notes'

const aideMemoire = document.getElementById('aideMemoire')
const addToList = document.querySelector(addToList)
//this is to grab the list from the DOM

button.addEventListener('click', (e) => {
e.preventDefault()
const inputBox = document.getElementById('inputBox').value
console.log(addToList)
createNote(addtoList)
// Clear form after a todo has been created
form.reset()
})
