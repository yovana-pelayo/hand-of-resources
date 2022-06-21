const pool = require('../utils/pool');

class President {
  id;
  name;
  start;
  final;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.start = row.start;
    this.final = row.final;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from presidents');
    return rows;
  }
}
module.exports = { President };
