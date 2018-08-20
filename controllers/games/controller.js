const gameModel = require('../../models/games');

module.exports = {
  index(req, res, next) {
    gameModel.findAll()
      .then((games) => {
        res.locals.games = games;
        next();
      })
      .catch(err => next(err));
  },
  findOne(req, res, next) {
    const { id } = req.params;
    gameModel.findOne(id)
      .then((games) => {
        res.locals.games = games;
        next();
      })
      .catch(err => next(err));
  },
  destory(req, res, next) {
    const { id } = req.params;
    gameModel.delete(id)
      .then(games => next())
      .catch(err => next(err));
  },
};
