let myName = undefined;
let isFocus = false;

let jsInput;
let jsDiv;

// function dataToView() {
//   jsInput.value = myName === undefined ? '' : myName;
//   jsDiv.textContent = myName;
// }

function handleInput() {
  myName = jsInput.value;
  component();
}

function handleClick() {
  myName = '';
  component();
}

function component() {
  document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);
  
  jsInput = document.createElement('input');
  jsDiv = document.createElement('div');
  jsInput.oninput = handleInput;
  jsInput.onclick = handleClick;

  jsInput.value = myName === undefined ? '' : myName;
  jsDiv.textContent = myName;

  document.body.replaceChildren(...[jsInput, jsDiv]);

  if (isFocus) jsInput.focus();
}

setInterval(component, 15);
