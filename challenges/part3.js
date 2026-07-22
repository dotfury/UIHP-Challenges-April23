let myName = undefined;
let isFocus = false;

let jsInput = document.querySelector('input');
let jsDiv = document.querySelector('div');

function dataToView() {
  jsInput.value = myName === undefined ? '' : myName;
  jsDiv.textContent = myName;
}

function handleInput() {
  myName = jsInput.value;
  dataToView();
}

function handleClick() {
  myName = '';
  dataToView();
}

jsInput.oninput = handleInput;
jsInput.onclick = handleClick;

// function component() {
//   document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);

//   //your code here

//   if (isFocus) jsInput.focus();
// }

// setInterval(dataToView, 15);
