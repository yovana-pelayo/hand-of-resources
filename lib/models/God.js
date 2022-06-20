const pool = require('../utils/pool');

class God {
  id;
  name;
  known;
  drink;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.known = row.known;
    this.drink = row.drink;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from gods');
    return rows;
  }
  static async insert({ name, known, drink }) {
    const { rows } = await pool.query(
      'INSERT INTO gods (name, known, drink) VALUES ($1, $2, $3) RETURNING*',
      [name, known, drink]
    );
    return new God(rows[0]);
  }
}
module.exports = { God };

//talks to database
