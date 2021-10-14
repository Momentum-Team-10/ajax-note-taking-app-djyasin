let root = document.getElementById("root");
/* globals fetch, moment */
const url = "http://localhost:3000/notes";

root.innerHTML = `
<form id="notesbody">
<div class="inputBox">
        <input
        id="inputBox"
        type="text"
        placeholder="éphémère"
        required
        />
</div>
</form>
<button id="addToList" type="submit">Add to List</button>
    <div class="listOfNotes"
    <ul id="listOfNotes"></ul>
    </div>
`;


const aideMemoire = document.getElementById('aideMemoire')
const inputBox = document.querySelector(inputBox)
//this is to grab the list from the DOM

button.addEventListener('submit', (e) => {
e.preventDefault()
const inputBox = document.getElementById('inputBox').value
console.log(inputBox)
createNote(inputBox)
// Clear form after a todo has been created
form.reset()
})

function noteList() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for (let item of data) {
                noteLines(item)
            }
        })
}
