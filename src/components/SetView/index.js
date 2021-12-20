import './style.css';

function toHtml(item = {}) {
  const {title, answer} = item;
  return /*html*/ `
  <div class="item closed">
  <div class="clickable">
    <p class="title">${title}</p>
    <button class="copy">Copy</button>
  </div>
  <div class="answer">
    <pre class="answer_text">${answer}</pre>
  </div>
  </div>
  `
}

function SummToHtml(acc, item) {
  return acc += toHtml(item)
}

export default (container) =>{
  const wrapper = document.querySelector(container);
  return (data = []) => {
    wrapper.innerHTML = '';
    wrapper.insertAdjacentHTML('afterbegin',data.reduce(SummToHtml,''))
  }
} 