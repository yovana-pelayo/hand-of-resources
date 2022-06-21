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
  static async getById(id) {
    const { rows } = await pool.query('SELECT * from zodiacs WHERE id =$1', [
      id,
    ]);
    return rows[0];
  }
  static async updateById(id, attrs) {
    const zodiac = await Zodiac.getById(id);
    if (!zodiac) return null;
    const { name, type } = {
      ...zodiac,
      ...attrs,
    };
    const { rows } = await pool.query(
      ' UPDATE zodiacs SET name=$2, type=$3 WHERE id=$1 RETURNING *',
      [id, name, type]
    );
    return new Zodiac(rows[0]);
  }
  static async insert({ name, type }) {
    const { rows } = await pool.query(
      'INSERT INTO zodiacs (name, type) VALUES ($1, $2) RETURNING*',
      [name, type]
    );
    return new Zodiac(rows[0]);
  }
}
module.exports = { Zodiac };
