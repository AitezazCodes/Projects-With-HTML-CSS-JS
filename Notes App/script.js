const AddNoteBtn = document.querySelector(".addnote");

// Adding NEW Note
function NewNote() {
  let noteCreate = document.createElement("div");
  noteCreate.classList.add("notes");
  noteCreate.innerHTML = `<div class="tools">
    <button class="edit but">
        <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete but">
        <i class="fa-solid fa-trash"></i>
    </button>
    <button class="btn">
        Save
    </button>
</div>
<textarea readonly spellcheck="false" class="txt-area"></textarea>`;

  document.body.appendChild(noteCreate);

  const Note = noteCreate;
  const editButton = noteCreate.querySelector(".edit");
  const deleteButton = noteCreate.querySelector(".delete");
  const textArea = noteCreate.querySelector(".txt-area");
  const saveBtn = noteCreate.querySelector(".btn");


  function enableEditing() {
    textArea.removeAttribute("readonly");
    textArea.focus();
    textArea.style.backgroundColor = "rgb(168, 166, 166)";
    saveBtn.style.display = "block";
    deleteButton.style.display = "none";
}

function saveChanges() {
      textArea.setAttribute("readonly", "true");
      textArea.style.backgroundColor = "rgb(216, 216, 216)";
    saveBtn.style.display = "none";
    deleteButton.style.display = "block";
}

function deleteNote() {
    Note.remove();
}

  editButton.addEventListener("click", enableEditing);
  saveBtn.addEventListener("click", saveChanges);
  deleteButton.addEventListener("click", deleteNote);
}

AddNoteBtn.addEventListener("click", NewNote);

