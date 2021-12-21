import service from './../../services/examServices';
import { ShowLoader, HideLoader, OnError } from './../LoaderController';


function ClickHandler(num, view){
  return (e) => {
    e.preventDefault();
    ShowLoader();
    service.getAll(num)
      .then(view)
      .then(HideLoader)
      .catch(OnError(view));
  }
}

export default (view)=>{
  const btn1 = document.querySelector('.firstBtn');
  const btn2 = document.querySelector('.secondBtn');
  const btn3 = document.querySelector('.thirdBtn');
  const btn4 = document.querySelector('.fourthBtn');
  const btn5 = document.querySelector('.fifthBtn');

  btn1.addEventListener('click', ClickHandler(0, view));
  btn2.addEventListener('click', ClickHandler(1, view));
  btn3.addEventListener('click', ClickHandler(2, view));
  btn4.addEventListener('click', ClickHandler(3, view));
  btn5.addEventListener('click', ClickHandler(4, view));
}
