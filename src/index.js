import "@babel/polyfill";
import fc from './components/FormController';
import view from './components/SetView';
import answerToggle from './components/AnswerToggle'
import btnsHandler from './components/GetAllBtnController';
import requestMiddleware from './middleware/requestMiddleware';

import './index.css';

const container = '.container';

const listener = document.addEventListener('DOMContentLoaded', ()=>{
  fc('form', requestMiddleware(view(container)));
  answerToggle(container);
  btnsHandler(view(container))
  document.removeEventListener('DOMContentLoaded', listener);
})