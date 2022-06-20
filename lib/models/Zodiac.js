const pool = require('../utils/pool');

class Zodiac {
  id;
  name;
  type;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from zodiacs');
    return rows;
  }
}
module.exports = { Zodiac };
