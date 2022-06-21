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
  static async getById(id) {
    const { rows } = await pool.query('SELECT * from presidents WHERE id=$1', [
      id,
    ]);
    return rows[0];
  }
  static async insert({ name, start, final }) {
    const { rows } = await pool.query(
      'INSERT INTO presidents (name, start, final) VALUES ($1, $2, $3) RETURNING*',
      [name, start, final]
    );
    return new President(rows[0]);
  }
  static async updateById(id, attrs) {
    const pres = await President.getById(id);
    if (!pres) return null;
    const { name, start, final } = {
      ...pres,
      ...attrs,
    };
    const { rows } = await pool.query(
      ' UPDATE presidents SET name=$2, start=$3, final=$4 WHERE id=$1 RETURNING *',
      [id, name, start, final]
    );
    return new President(rows[0]);
  }
}
module.exports = { President };
