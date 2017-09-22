var express = require('express');
var router = express.Router();
var GitHubApi = require("github");
var mongodb = require("mongodb");

var url = "mongodb://admin:clave123@ds139675.mlab.com:39675/followers"


router.get('/getFollowers/:user', function (req, res, next) {
    var github = new GitHubApi({});

    github.users.getFollowersForUser({

        username: req.params.user
    }, function (err, data) {
        res.json(data);
    });
});
router.get('/busquedasRecientes', function (req, res) {

    function getBusquedas(callback) {

        mongodb.connect(url, (err, db) => {

            if (err) throw err;

            var busquedas = db.collection("busquedas");

            busquedas.find({}).toArray((err2, busquedas) => {

                if (err2) throw err2;

                callback(busquedas);
            })
        })
    }

    getBusquedas((busquedas) => {
        res.json(busquedas);
    });
});
router.post('/postBusquedas', function (req, res) {

    mongodb.connect(url, (err, db) => {

        if (err) throw err;

        db.collection("busquedas").save(req.body, (err, result) => {

            if (err) return 'Error en post'
            res.send('Se agrego con exito la busquedad' + JSON.stringify(req.body));
        })
    })
})

    module.exports = router;
