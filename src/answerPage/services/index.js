class AnswerService {
  async getAll(){
    const res = await fetch('/getquestions', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pass: new URLSearchParams(window.location.search).get('pass'),
      }),
    });
    
    const data = await res.json();

    if(res.ok) return data;

    alert(data.message);

    return [];
  }
}

export default new AnswerService();