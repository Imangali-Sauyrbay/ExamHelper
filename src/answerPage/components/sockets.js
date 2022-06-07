import { answersToString } from "./utils";
import template from "./template";

function updateAnswers({id, answers}) {
  const target = document.querySelector(`[data-id="${id}"] pre`);
  if(!target) return;

  target.innerHTML = answersToString(answers);
  target.parentElement.scrollTo({top: target.clientHeight, behavior: 'smooth'});
}

function addAnswer(ans) {
  const cont = document.getElementById('container');
  if(cont.querySelector('[data-question]')) {
    cont.insertAdjacentHTML('afterbegin', template(ans));
  } else {
    cont.innerHTML = template(ans);
  }

  document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
}

export default function (socket) {
  socket.on('update_answers', updateAnswers);
  socket.on('add_answer', addAnswer);
}