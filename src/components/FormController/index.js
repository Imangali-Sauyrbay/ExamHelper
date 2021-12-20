import './style.css';

export default (id, view) => {
  const form = document.getElementById(id);

  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    view(event.target.children.text.value);
    event.target.children.text.value = null;
  })
}