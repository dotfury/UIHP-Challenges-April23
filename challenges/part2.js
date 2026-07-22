let post = undefined;
const START_STING = 'Whats on your mind?';
const posts = [];

const jsInput = document.querySelector('input');
const jsDiv = document.querySelector('div');
const submitBtn = document.querySelector('button');
const postContainer = document.querySelector('ul');

function handleInput() {
  post = jsInput.value;
  dataToView();
}

function handleClick() {
  post = '';
  dataToView();
}

function dataToView() {
  jsInput.value = post ?? START_STING;
  jsDiv.textContent = post;

  if (posts.length > 0) {
    const postElements = posts.map(p => {
      const el = document.createElement('li');
      el.textContent = p;

      return el;
    });

    postContainer.replaceChildren(...postElements);
  }
}

function createPost(e) {
  e.preventDefault();
  posts.push(post);
  dataToView();
}

jsInput.oninput = handleInput;
jsInput.onfocus = handleClick;
submitBtn.onclick = createPost;

dataToView();
