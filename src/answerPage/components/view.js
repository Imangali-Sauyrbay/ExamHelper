import template from "./template";

export default function(selector) {
  const container = document.querySelector(selector);
  return function(data = []) {
    container.innerHTML = data.length === 0 ?
    '<h4 class="text-center">Вопросов нет!</h4>'
    : data.map(row => {
      return template(row);
    }).join('\n');

    container.querySelectorAll(`[data-question] pre`).forEach(target => {
      target.parentElement.scrollTo({top: target.clientHeight, behavior: 'smooth'});
    });
  }
}