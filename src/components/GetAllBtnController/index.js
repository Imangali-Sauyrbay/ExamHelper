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
  btn1.addEventListener('click', ClickHandler(0, view));
}
