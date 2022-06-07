const mysql = require('mysql2/promise');
class DB {
  constructor(dbname, dbpassword, port = 3306, host = "localhost", user = 'root') {
    this._connection = null;
    this.dbname = dbname;
    this.dbpassword = dbpassword;
    this.host = host;
    this.port = port;
    this.user = user;

    this.connect();
  }

  connection() {
    return mysql.createConnection(process.env.JAWSDB_URL || {
      host: this.host,
      port: this.port,
      user: this.user,
      password: this.dbpassword,
      database: this.dbname,
    });
  }

  async connect() {
    this._connection = await this.connection();
    console.log(this._connection.threadId, 'connected');
  }

  async query(...args) {
    if(!this._connection)
      await this.connect();

    
    return await this._connection.execute(...args);
  }

  async getConnection() {
    if(!this._connection)
      await this.connect();

    return this._connection;
  }

  dropConnection() {
    if (this._connection) {
      this._connection.end();
      this._connection = null;
    }
  }

  insert(table, columns = [], values = []) {
    let query = `INSERT INTO ${table} (`;

    columns.forEach((col, i, arr) => {
      if(i !== arr.length - 1) col += ', ';
      query += col;
    });

    query += ') VALUES (';

    values.forEach((value, i, arr) => {
      query += this._connection.escape(value) + ((i !== arr.length - 1) ? ', ' : '');
    });

    query += ')';

    return this._connection.execute(query);
  }

  async deleteOlderRecords(table, minutes) {
    return await this.query(`DELETE FROM ${table} WHERE asked_at < now() - interval ${minutes} MINUTE and id;`)
  }

  async withAnswers(rows = []) {
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const [ans] = await this.query(`SELECT * FROM question_answers WHERE question_id = ${row.id}`);
      row.answers = ans;
    }
  }
}

const db = new DB('exam', 'Anime_134679', 3305);
module.exports = db;