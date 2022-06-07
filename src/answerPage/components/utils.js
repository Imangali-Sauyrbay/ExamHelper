import moment from "moment";


const UTCDateToLocaleDateTime = (UTC) => {
  if(!UTC) return null;
  return moment(UTC).utcOffset(6).format('DD.MM.YY HH:mm:ss');
}

const answersToString = (ans=[]) => {
  let answers = '';

  ans.forEach((ansRow, i, arr) => {
    const {answer, created_at, answered_by} = ansRow;
    if(!answer || !answered_by) return;

    answers += `${UTCDateToLocaleDateTime(created_at) || ''}| ${answered_by}: ${answer}`;

    if(i !== arr.length - 1) answers += '\n';
  });

  return answers
}


export {
  answersToString,
  UTCDateToLocaleDateTime
}