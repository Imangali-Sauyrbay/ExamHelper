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
  const btns = document.querySelectorAll('.getAllBtn');
  btns.forEach((btn, index)=>btn.addEventListener('click', ClickHandler(index, view)))
}
