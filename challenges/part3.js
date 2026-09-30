let myName = '';
let isFocus = false;

let jsInput;
let jsDiv;
let otherDiv;
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
    [['div', `Hi, ${myName}`], ['div', `Hello, darling ${myName}`]]
  ];
}

function isNested(arr) {
  return arr.some(Array.isArray);
}

function convert(node) {
  if (isNested(node)) {
    return node.map(convert);
  }

  const element = document.createElement(node[0]);
  element.textContent = node[1];
  element.value = node[1];
  element.oninput = node[2];

  return element;
}

function updateDOM() {
  // document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);
  vDOM = createDOM();

  const elements = vDOM.map(convert).flat();

  // jsInput = elements[0];
  // jsDiv = elements[1];
  // otherDiv = elements[2];
  document.body.replaceChildren(...elements);
  // if (isFocus) jsInput.focus();
}

setInterval(updateDOM, 15);

