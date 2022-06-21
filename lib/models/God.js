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
  static async getById(id) {
    const { rows } = await pool.query('SELECT * from gods WHERE id=$1', [id]);
    return rows[0];
  }

  static async updateById(id, attrs) {
    const god = await God.getById(id);
    if (!god) return null;
    const { name, known, drink } = {
      ...god,
      ...attrs,
    };
    const { rows } = await pool.query(
      ' UPDATE gods SET name=$2, known=$3, drink=$4 WHERE id=$1 RETURNING *',
      [id, name, known, drink]
    );
    return new God(rows[0]);
  }
  static async insert({ name, known, drink }) {
    const { rows } = await pool.query(
      'INSERT INTO gods (name, known, drink) VALUES ($1, $2, $3) RETURNING*',
      [name, known, drink]
    );
    return new God(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM gods WHERE id=$1 RETURNING*',
      [id]
    );

    return new God(rows[0]);
  }
}
module.exports = { God };
