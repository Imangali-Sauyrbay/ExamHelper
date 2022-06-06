import './style.css';

function clickHandler(e){
  e.stopPropagation();

  if(e.target.classList.contains('clickable')){
    const parent = e.target.parentElement;

    if(parent.classList.contains('closed'))
        parent.classList.remove('closed');
    else
        parent.classList.add('closed');
  }

  if(e.target.classList.contains('copy')){
    const sel = window.getSelection();
    const range = document.createRange();
    const parent = e.target.closest('.item');
    const target = parent.querySelector('.answer_text')
    range.selectNodeContents(target);
    sel.removeAllRanges();
    sel.addRange(range);

    const basicColor =  e.target.style.backgroundColor;
    try{
      parent.classList.remove('closed');
      document.execCommand('copy');
      sel.removeAllRanges();
      e.target.style.backgroundColor = 'lightgreen';
    }
    catch(e){
      e.target.style.backgroundColor = 'red';
    }
    setTimeout(()=>{
      e.target.style.backgroundColor = basicColor;
    }, 1000)
  }
  
}

export default (container) => {
  const wrapper = document.querySelector(container);
  wrapper.addEventListener('click', clickHandler);
}