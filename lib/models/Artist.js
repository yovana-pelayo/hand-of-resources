const pool = require('../utils/pool');

class Artist {
  id;
  name;
  genre;
  hit;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.genre = row.genre;
    this.hit = row.hit;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from artists');
    return rows;
  }
}
module.exports = { Artist };
