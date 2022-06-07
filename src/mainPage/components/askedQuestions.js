
import { answersToString } from '../../answerPage/components/utils';
import { ShowLoader, HideLoader, OnError } from './LoaderController';

const template = ({title, answers}) => /*html*/`
<div class="item">
  <div class="clickable">
    <div class="title">${title}</div>
    <button class="copy">Copy</button>
  </div>
  <div class="answer">
    <pre class="answer_text">${answers}</pre>
  </div>
</div>
`;

const showQuestions = container => (data = []) => {
  container.innerHTML = data.length === 0 ?
  '<h4 class="text-center">Нет ответов на базе!</h4>'
  : data.map(row => {
    const answers = answersToString(row.answers)
    return template({
      title: row.question,
      answers
    });
  }).join('\n');
}

export default function (input, container, view) {
  const btn = document.getElementById('asked');

  btn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    ShowLoader();
    fetch('/asked', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: input.value,
      }),
    })
      .then(res => res.json())
      .then(showQuestions(container))
      .then(HideLoader)
      .catch(OnError(view));
  })
}