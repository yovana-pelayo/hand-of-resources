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

  static async getAll() {
    const { rows } = await pool.query('SELECT * from sharks');
    return rows;
  }
}
module.exports = { Shark };
