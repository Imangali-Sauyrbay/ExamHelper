const btns = document.querySelectorAll('.btn');
const loader = document.querySelector('.loader');

function ShowLoader(){
  loader.style.display = 'block';
  btns.forEach(btn=>btn.disabled = true);
}

function HideLoader(){
  loader.style.display = 'none';
  btns.forEach(btn=>btn.disabled = false);
}

function OnError(view){
  return (e) => {
    HideLoader();
    view([{
      title:'Ошибка отправки запроса!',
      answer: e.message + '; Попробуй перезагрузить страницу!'
    }]);
  }
}

export {
  ShowLoader,
  HideLoader,
  OnError
}
