var express = require('express');
var router = express.Router();
var GitHubApi = require("github");

/* GET home page. */
router.get('/getFollowers/:user', function(req, res, next) {
    var github = new GitHubApi({});

    github.users.getFollowingForUser({

        username: req.params.user
    }, function(err, data) {
        console.log(JSON.stringify(data));
    });
});

module.exports = router;
