import { answersToString, UTCDateToLocaleDateTime } from './utils';

export default (row) => {
  const {id, question, asked_at, answers: ans} = row;


  return /*html*/`
  <div class="row mt-3" data-question data-id="${id}">
    <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1 border border-dark bg-light rounded-1">
      <div class="row py-1">
        <div class="col mx-2 h5">${question}</div>
        <div class="col-3 col-md-2 text-end">${UTCDateToLocaleDateTime(asked_at) || ''}</div>
      </div>
      <div class="row border-bottom border-top border-dark py-1 overflow-auto bg-white" style="max-height: 200px;">
        <pre class="col-sm-12">${answersToString(ans)}</pre>
      </div>
      <div class="row">
        <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 p-2">
          <form class="d-flex justify-content-center">
              <input type="text" class="form-control" placeholder="Ответ"/>
              <button type="submit" class="btn btn-primary" id="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  `
};