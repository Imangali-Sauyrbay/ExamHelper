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
    return mysql.createConnection({
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
      await this.connect;

    
    return await this._connection.execute(...args);
  }

  dropConnection() {
    if (this._connection) {
      this._connection.end();
      this._connection = null;
    }
  }
}

const db = new DB('exam', 'Anime_134679', 3305);
module.exports = db;