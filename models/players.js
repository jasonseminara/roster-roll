const db = require('../connection');

module.exports = {
  findAll() {
    return db.many(`
        SELECT *
        FROM players
        `);
  },

  findOne(id) {
    return db.one(`
        SELECT *
        FROM players
        WHERE id = $1
        `, id);
  },

  create(playerData) {
    return db.one(`
        INSERT INTO players
        (name, team)
        VALUES
        ($1, $2)
        RETURNING *
        `, [playerData.name, playerData.team]);
  },

  delete(id) {
    return db.none(`
        DELETE FROM players
        WHERE id = $1
        `, id);
  },

  update(id, playerData) {
    return db.one(`
        UPDATE players
        SET
          name = $2,
          team = $3
        WHERE id = $1
        RETURNING *
        `, [id, playerData.name, playerData.team]);
  },
};

// module.exports.create('frank','Sliders').then(players => console.log(players));
