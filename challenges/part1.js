/** Write your code below */
let post = '';
const jsInput = document.querySelector('input');
const jsDiv = document.querySelector('div');

jsInput.oninput = handleInput;

function handleInput(e) {
  post = e.target.value;
  jsDiv.textContent = post;
}