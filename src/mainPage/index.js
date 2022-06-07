import "@babel/polyfill";
import formController from './components/FormController';
import setView from './components/SetView';
import answerToggle from './components/AnswerToggle'
import requestMiddleware from './middleware/requestMiddleware';
import { ShowLoader, HideLoader, OnError } from './components/LoaderController';
import initAskedQuestion from './components/askedQuestions';

import './index.css';

const container = '.container';

const listener = document.addEventListener('DOMContentLoaded', () => {
  const view = setView(container);

  formController('form', requestMiddleware(view));
  answerToggle(container);

  const input = document.getElementById('text');
  const askBtn = document.getElementById('ask');

  askBtn.addEventListener('click', e => {
    e.preventDefault();
    ShowLoader();
    fetch('/ask', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question: input.value,
      }),
    })
    .then(res => res.json())
    .then(view)
    .then(HideLoader)
    .catch(OnError(view));
  });

  initAskedQuestion(input, document.querySelector(container), view);

  document.removeEventListener('DOMContentLoaded', listener);
});