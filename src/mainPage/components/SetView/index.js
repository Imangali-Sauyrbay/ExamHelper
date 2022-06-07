import './style.css';

function toHtmlElement(item = {}, index = '') {
  const {title, answer} = item;

  const mainWrapper = document.createElement('div');
  mainWrapper.classList.add('item');

  const titleWrapper = document.createElement('div');
  titleWrapper.classList.add('clickable');

  const titleText = document.createElement('div');
  titleText.classList.add('title');
  titleText.innerHTML = `${index + 1}) ${title}`;

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
  answerText.innerHTML = 'answer: ' + answer;

  answerWrapper.appendChild(answerText);
  mainWrapper.appendChild(answerWrapper);
  
  return mainWrapper;
}

export default (container) =>{
  const wrapper = document.querySelector(container);
  return (data = []) => {
    wrapper.innerHTML = "";

    if(data.length === 0) {
      wrapper.innerHTML =  '<h4 class="text-center">Нет ответов на базе!</h4>';
      return;
    }
    data.map(toHtmlElement).forEach($el => wrapper.appendChild($el));
  }
} 