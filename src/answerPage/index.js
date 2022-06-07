import './style.css';
import { io } from 'socket.io-client'
import initSockets from './components/sockets';
import setView from './components/view';
import service from './services/index';

const socket = io();

document.addEventListener('DOMContentLoaded', () => {
  const view = setView('#container');
  

  service.getAll()
  .then(view)
  .catch();

  const nickname = document.getElementById('nickname');
  nickname.value = localStorage.getItem('nick') || '';

  document.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    if(e.target.tagName !== 'BUTTON') return;

    const question = e.target.closest('[data-question]');
    if(!question) return;

    const nick = nickname.value;
    if(!nick) return alert('Сначала напишите ваш ник!');


    const id = +question.getAttribute('data-id');
    if(!id) return alert('Ошибка получения идентификатора! Попробуйте перезагрузить страницу!');

    const input = e.target.previousElementSibling;
    if(!input) return alert('Ошибка! Попробуйте перезагрузить страницу!');

    const value = input.value;
    if(!value) return alert('Поле ответа не заполнено');
    
    
    socket.emit('answered', {
      question_id: id, answered_by: nick, answer: value
    });

    input.value = '';
  });

  nickname.addEventListener('input', e => {
    localStorage.setItem('nick', e.target.value);
  });

  initSockets(socket);
});