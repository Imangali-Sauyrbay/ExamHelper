class ExamServices {
  async getMatch(text){
    const res = await fetch('/match', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text})
    });
    return await res.json();
  }

  async getAll(level){
    const res = await fetch('/getAll/'.concat(level), {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text})
    });
    return await res.json();
  }
}

export default new ExamServices();