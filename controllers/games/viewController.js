module.exports = {
  showAll(req, res) {
    res.format({
      html() {
        res.render('../views/games/showAll');
      },
      json() {
        res.json(res.locals.games);
      },
    });
  },

  showOne(req, res) {
    res.render('games/showOne');
  },

  handleDestory(req, res) {
    res.redirect('/games');
  },

  show404(req, res) {
    res.send(404);
  },
};
