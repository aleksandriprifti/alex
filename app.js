// // let myList = document.querySelectorAll("#book-list ul li .name");

// // Array.from(myList).forEach(ele => {
// //   ele.textContent += " boooo";
// // });

// let test = document.querySelector("#page-banner");
// console.log(test.nodeType);
// console.log(test.nodeName);
// console.log(test.hasChildNodes());

// const clonedNode = test.cloneNode(false);
// console.log(clonedNode);

document.addEventListener("mouseover", e => {
  let x = e.screenX;
  let y = e.screenY;
  let divBg = document.querySelector("window");
  document.body.style.backgroundColor = `rgb(${x}, ${y}, 120)`;
});

// let mess = document.querySelector("#page-banner h1");

// mess.textContent = x;
