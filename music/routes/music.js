var express = require('express');
var router = express.Router();
var Music = require('../models').Music;

var music = [
  { id: 1, title: 'A Show Of Hands' },
  { id: 2, title: 'ArtScience' },
  { id: 3, title: 'School Days' }
]

/* GET home page. */
router.get('/', function(req, res) {
  Music.all({
    order: [
      ['createAt','ACS']
    ]
  })
    .then( function(music) {
      return res.render('music', { music: music });
  })

  router.post('/', function(req, res) {
    var title = req.body.title;
    Movie.create({ title: title })
      .then( function() {
        res.redirect('/music');
    });
  });
  router.delete('/:id', function(req, res) {
    Movie.findById(req.params.id)
      .then( function(movie) {
        movie.destroy()
      })
      .then( function() {
        return res.redirect('/music');
    });
  });
  router.put('/:id', function(req, res) {
    Movie.update(
      { title: req.body.title },
      { where: { id: req.params.id } }
    )
    .then( function() {
      return res.redirect('/music');
    })
  });


});



module.exports = router;
