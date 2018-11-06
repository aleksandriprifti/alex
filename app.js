// Adding a new task
const addForm = document.forms["add-task"];

addForm.addEventListener("submit", e => {
  // Prevent the default behaviour of the submit event
  e.preventDefault();

  let inputValue = addForm.querySelector('input[type="text"]').value;

  // create element
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // add content
  bookName.textContent = inputValue;
  bookName.className = "name";
  deleteBtn.textContent = "delete";
  deleteBtn.className = "delete";

  // append span elements to ul
  li.appendChild(bookName);
  li.appendChild(deleteBtn);

  list.appendChild(li);

  //inputValue.setAttribute("value", " ");
  inputValue = " ";
});

// Delete task from list - In this case I have made use of event bubbling. Event is added to
//  the ul element and trigered form the innermost target element
const list = document.querySelector("#task-list ul");

list.addEventListener("click", e => {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});
