// Change the bg color based on offsetX & offsetY properties 
document.body.addEventListener("mouseover", e => {
  let x = e.offsetX;
  let y = e.offsetY;
  let divBg = document.querySelector("window");
  document.body.style.backgroundColor = `rgb(${x}, ${y}, 35)`;
});

// Delete task from list - Add event to the delete button in order to delete task from the list
const list = document.querySelector('#book-list ul');

list.addEventListener('click', (e) => {

    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// Adding a new task

const addForm = document.forms['add-task'];

addForm.addEventListener('submit', (e) => {
   e.preventDefault();

   const inputValue = addForm.querySelector('input[type="text"]').value;

   console.log(inputValue);
});

//console.log(formList['add-task']);
