import './style.css';

function toHtmlElement(item = {}, index = '') {
  const {title, answer} = item;

  const mainWrapper = document.createElement('div');
  mainWrapper.classList.add('item');
  mainWrapper.classList.add('closed');

  const titleWrapper = document.createElement('div');
  titleWrapper.classList.add('clickable');

  const titleText = document.createElement('div');
  titleText.classList.add('title');
  titleText.textContent = `${index}) ${title}`;

  const copyButton = document.createElement('button');
  copyButton.classList.add('copy');
  copyButton.textContent = 'Copy';

  titleWrapper.appendChild(titleText);
  titleWrapper.appendChild(copyButton);
  mainWrapper.appendChild(titleWrapper);

  const answerWrapper = document.createElement('div');
  answerWrapper.classList.add('answer');

  const answerText = document.createElement('pre');
  answerText.classList.add('answer_text');
  answerText.textContent = answer;

  answerWrapper.appendChild(answerText);
  mainWrapper.appendChild(answerWrapper);
  
  return mainWrapper;
}

export default (container) =>{
  const wrapper = document.querySelector(container);
  return (data = []) => {
    wrapper.innerHTML = "";
    data.map(toHtmlElement).forEach($el => wrapper.appendChild($el));
  }
} 