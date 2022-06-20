const pool = require('../utils/pool');

class Shark {
  id;
  name;
  species;
  family;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.species = row.species;
    this.family = row.family;
  }
  static async insert({ name, species, family }) {
    const { rows } = await pool.query(
      'INSERT INTO sharks (name, species,family) VALUES ($1, $2, $3) RETURNING*',
      [name, species, family]
    );
    return new Shark(rows[0]);
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from sharks');
    return rows;
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * from sharks WHERE id = $1', [
      id,
    ]);
    return rows[0];
  }
}
module.exports = { Shark };
