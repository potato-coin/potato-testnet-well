var express = require("express");
var router = express.Router();
var async = require("async");

var Eos = require("eosjs");

/* GET test listing. */
router.get("/", function(req, res, next) {
  var config = req.app.get("config");
  var eos = Eos.Localnet(config.provider);

  prvkey = "5JXgXUpAhYbu6Smf9vZiKnYjGmxfGh2BkZCQZAPLv9DzFkAnu9S";
  pubkey = "EOS5Lo8iT5EkmSCASP6THm9kwePJKcbWzdQ3pj2Hmz3pyYamuViuF";

  // eos.getTableRows(true, 'player', 'player', 'game').then(r => {console.log(r)})

  // eos.contract('player')
  //   .then(result => {
  //     console.log(result);
  //     result.create({player:'user', player1:1, player2:2},{authorization: 'user@active'}).then(result => {
  //           console.log(result);
  //           eos.pushTransaction(result.transaction, (result) => {
  //             console.log(result);
  //           })
  //         });
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  //创建账号
  eos
    .newaccount({
      creator: "eosio",
      name: "aaaabbbbcccc",
      owner: pubkey,
      active: pubkey,
      //recovery: "eosio"
    })
    .then(result => {
      console.log(result);
      eos.pushTransaction(result.transaction, (result, error) => {
        console.log(error);
        console.log(result);
      })
    })
    .catch(error => {
      console.log(error);
    });

  // //账号间转账
  // options = {
  //   broadcast: true,
  //   sign: true,
  //   authorization: 'user@active'
  // }
  // eos.transfer('user', 'aaaabbbbcccc', "10.0000 EOS", "", options)
  //   .then((result)=>{
  //     console.log(result);
  //     eos.pushTransaction(result.transaction, (error, result) => {
  //           console.log(result);
  //         })
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  // //获取账号余额
  // eos.getCurrencyBalance('eosio.token', 'user2')
  //   .then(result => {
  //     console.log(result);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  res.render("test");

  // async.waterfall(
  //   [
  //     function(callback) {
  //       eos
  //         .getInfo({})
  //         .then(result => {
  //           callback(null, result);
  //         })
  //         .catch(error => {
  //           callback(error, null);
  //         });
  //     },
  //     function(lastBlock, callback) {
  //       var txs = [];

  //       var blockCount = 10;

  //       if (lastBlock.head_block_num - blockCount < 0) {
  //         blockCount = lastBlock.head_block_num + 1;
  //       }

  //       async.times(
  //         blockCount,
  //         function(n, next) {
  //           eos.getBlock(lastBlock.head_block_num - n, function(err, block) {
  //             next(err, block);
  //           });
  //         },
  //         function(err, txs) {
  //           callback(err, txs);
  //         }
  //       );
  //     }
  //   ],
  //   function(err, txs) {
  //     if (err) {
  //       return next(err);
  //     }

  //     res.render("index", { txs: txs });
  //   }
  // );
});

module.exports = router;
