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
  static async insert({ name, genre, hit }) {
    const { rows } = await pool.query(
      'INSERT INTO artists (name, genre, hit) VALUES ($1, $2, $3) RETURNING*',
      [name, genre, hit]
    );
    return new Artist(rows[0]);
  }
}
module.exports = { Artist };
