import "@babel/polyfill";
import formController from './components/FormController';
import setView from './components/SetView';
import answerToggle from './components/AnswerToggle'
import requestMiddleware from './middleware/requestMiddleware';

import './index.css';

const container = '.container';

const listener = document.addEventListener('DOMContentLoaded', () => {
  const view = setView(container);

  formController('form', requestMiddleware(view));
  answerToggle(container);

  const input = document.querySelector('#text');
  document.querySelector('#searh').addEventListener('click', e => {
    window.open('https://www.google.com/search?q=' + encodeURI(input.value), '_self');
  });

  document.removeEventListener('DOMContentLoaded', listener);
})