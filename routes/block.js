var express = require('express');
var router = express.Router();
var async = require('async');

var Eos = require('eosjs');

/*Get Block Information*/
router.get('/block/:block_num', function (req, res, next) {
    var config = req.app.get('config');
    var eos = Eos.LocalNet(config.provider);

    async.waterfall([
        function(callback) {
            eos.get_block(req.params.block, function(err, result) {
                callback(err, result);
            });
        }, function(result, callback) {
            if (!result) {
                return next({name: "BlockNotFoundError", message: 'Block not found!'});
            }
        }

    ], function(err, block) {
        if (err) {
            return next(err);
        }
        res.render('block', { block: block})
    }
)
});
module.exports = router;