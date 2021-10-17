let root = document.getElementById("root");
/* globals fetch, moment */
const url = "http://localhost:3000/notes";

root.innerHTML = `
<div class="container"> 
<form id="notesBody">
<div class="inputBox">
        <input
        id="inputBox"
        type="text"
        placeholder="éphémère"
        required
        />
</div>
<button id="addToList" type="submit">Add to List</button>
</form>
<div class="listOfNotes">
<ul id="listOfNotes"></ul>
</div>
</div>
`;

//this declares the text within the list
const form = document.getElementById("notesBody");
//this calls the form itself
const listOfNotes = document.getElementById("listOfNotes");

//this is the event listener for when the input is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputBox = document.getElementById("inputBox").value;
  if (inputBox === "") {
    form.reset()
  } else {
    console.log(inputBox);
    createNote(inputBox);
  }
});

//function to handle delete fetch request
function deleteNote(noteEl) {
  fetch(url + "/" + `${noteEl.parentElement.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => noteEl.parentElement.remove());
}

//function to update note text
function editNote(noteEl) {
  const editNote = document.getElementById("notesBody").value;
  console.log(editNote)
  fetch(url + "/" + `${noteEl.parentElement.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      title: noteEl,
      body: noteEl,
      updated_at: moment().format(),
  }),
  })
  .then((res) => res.json())
  .then((data) => {
renderNoteText(noteEl.parentElement, data);
  });
  }

//this triggers the edit and delete functions when the respective icons are clicked.
listOfNotes.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    console.log("noteDeleted");
    deleteNote(e.target);
  }
  if (e.target.classList.contains("edit")) {
    console.log("noteEdited");
    editNote(e.target);
  }
});

function noteList() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let item of data) {
        renderListOfNotes(item);
        console.log(item.id);
      }
    });
}

//this is the function that actually posts the text to the list
function renderListOfNotes(noteObj) {
  const li = document.createElement("li");
  li.id = noteObj.id;
  //li.classList.add();
  renderNoteText(li, noteObj);
  listOfNotes.appendChild(li);
  console.log(noteObj);
}

//these create the edit and delete icons
function renderNoteText(li, noteObj) {
  li.innerHTML = `
  <span>${noteObj.body}</span>
  <i class="ml2 dark-red fas fa-times delete"></i><i class="ml3 fas fa-edit edit"></i>
  `;
}

//this is the function that creates
function createNote(noteText) {
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Token " },
    body: JSON.stringify({
      title: noteText,
      body: noteText,
      created_at: moment().format(),
    }),
  })
    .then((res) => res.json())
    .then((data) => renderListOfNotes(data));
}

noteList()
