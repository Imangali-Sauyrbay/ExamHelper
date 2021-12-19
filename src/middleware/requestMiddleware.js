import service from './../services/examServices';

export default (fn) => (text) =>{
    service.getMatch(text)
    .then(fn)
    .catch((e)=>{
      alert(e.message);
    })
}