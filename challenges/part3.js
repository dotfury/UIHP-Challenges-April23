let myName = '';
let isFocus = false;

let jsInput;
let jsDiv;
let vDOM;

function createDOM() {
  return [
    [
      'input',
      myName,
      function handle() {
        myName = jsInput.value;
      }
    ],
    ['div', `Hi, ${myName}`]
  ];
}

function convert(node) {
  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];

  return element;
}

function updateDOM() {
  document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);
  vDOM = createDOM();
  jsInput = convert(vDOM[0]);
  jsDiv = convert(vDOM[1]);
  document.body.replaceChildren(jsInput, jsDiv);
  if (isFocus) jsInput.focus();
}

setInterval(updateDOM, 15);
