import service from './../../services/examServices';


function ClickHandler(num, view){
  return (e) => {
    e.preventDefault();
    service.getAll(num)
    .then(view)
    .catch(e=>{
      alert(e.message);
    })
  }
}

export default (view)=>{
  const btn1 = document.querySelector('.firstBtn');
  const btn2 = document.querySelector('.secondBtn');
  const btn3 = document.querySelector('.thirdBtn');

  btn1.addEventListener('click', ClickHandler(1, view));
  btn2.addEventListener('click', ClickHandler(2, view));
  btn3.addEventListener('click', ClickHandler(3, view));
}
