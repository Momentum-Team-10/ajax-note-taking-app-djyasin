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
    <div class="listOfNotes"
    <ul id="listOfNotes"></ul>
    </div>
</form>
 </div>
`;

const aideMemoire = document.getElementById("aideMemoire");
const inputBox = document.querySelector("#inputBox");
const listofNotes = document.getElementById("listofNotes");
const notesBody = document.getElementById("notesBody");
//const inputBox = document.getElementById('inputBox')
//this is to grab the list from the DOM

inputBox.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputBox = document.getElementById("inputBox").value;
  console.log(inputBox);
  createNote(inputBox);
})

notesBody.addEventListener("click", (e) => {
  let inputBox = document.getElementById("inputBox");
  if (e.target.classlist.contains("delete")) {
    createNote(inputBox);
    form.reset();
  }
//})

function noteList() {
fetch(url)
.then((res) => res.json())
   .then((data) => {
   console.log(data);
  for (let item of data) {
    renderListOfNotes(item);
  }
   });
}

function renderListOfNotes(noteObj) {
  let li = document.createElement("li");
  li.id = noteObj.id;
  li.classList.add();
  //renderListOfNotes(li, noteObj);
  listofNotes.appendChild(li);
  console.log(noteObj)
}

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

//function deleteNote(listofNotesEl) {
//  fetch(url + "/"`$(listOfNotesEl.id)`, {
//   method: "DELETE",
//  }).then(() => listofNotesEl.ParentElement.remove());
//}
//function updateNote(noteEl)
//  let noteText = document.getElementById('note-text').value
//   fetch(url + '/' `${noteEl.id}`, {
//      method: 'PUT',
//      headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//           title: noteText,
//           body: noteText,
//           updated_at: moment().format()
//       })
//   }
//   )

//noteList();
