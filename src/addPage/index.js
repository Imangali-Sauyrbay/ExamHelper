import './style.css';

const svgTemplate = (sides, xmargins) => `
<svg style="margin-left:${xmargins}; margin-right:${xmargins};" width="${sides}" height="${sides}" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <use xlink:href="#loader" />
</svg>
`

const listener = document.addEventListener('DOMContentLoaded', () => {
  const pass = new URLSearchParams(window.location.search).get('pass');
  const title = document.getElementById('title');
  const answer = document.getElementById('answer');
  const alert = document.getElementById('alert');
  const submit = document.getElementById('submit');
  const form = document.getElementById('form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    e.stopPropagation();

    const btnStyles = getComputedStyle(submit);
    const height = parseInt(btnStyles.height) - (parseInt(btnStyles.paddingBottom) + parseInt(btnStyles.paddingTop));
    const width = parseInt(btnStyles.width) - (parseInt(btnStyles.paddingLeft) + parseInt(btnStyles.paddingRight));

    const xmargin = (width - height) / 2;

    const text = submit.textContent;

    submit.disabled = true;
    submit.innerHTML = svgTemplate(height + 'px', xmargin + 'px');
    
    function catchAll(className){
      return function(msg) {
        submit.disabled = false;
        submit.innerHTML = text;
      
        alert.classList.add(className);
        alert.innerHTML = msg;
      
        setTimeout(() => {
          alert.classList.remove(className);
          alert.innerHTML = '';
        }, 4000);
      }
    }

    fetch('/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title.value,
        answer: answer.value,
        pass,
      }),
    })
    .then(res => {
      if(res.ok) {
        return res.json().then(data => catchAll('alert-success')(data.message));
      }

      res.json().then(data => catchAll('alert-danger')(data.message));
    })
    .catch(catchAll('alert-danger'));
  })  
});

