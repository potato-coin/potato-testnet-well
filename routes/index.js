var express = require('express');
var router = express.Router();
// var async = require('async');
// const asyncHandler = require('express-async-handler');

const { Api, JsonRpc, RpcError, JsSignatureProvider } = require('pcjs');
const fetch = require('node-fetch');
const { TextEncoder, TextDecoder } = require('util');

const defaultPrivateKey = "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3";
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
const rpc = new JsonRpc('https://potato.jocky123.com', { fetch });
const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {});
});

router.post('/', async (req, res, next) => {
  try {
    const account = req.body.name;
    if (account == undefined || account == '' || account == null) {
      res.render("index", {
        error: 'account error.'
      });
      return;
    }
    var amount = parseFloat(req.body.amount);
    if (isNaN(amount) || amount <= 0) {
      amount = 100;
    }
    amount = amount.toFixed(4) + " POC";

    const result = await api.transact({
      actions: [{
        account: 'pc.token',
        name: 'transfer',
        authorization: [{
          actor: 'potato',
          permission: 'active',
        }],
        data: {
          from: 'potato',
          to: account,
          quantity: amount,
          memo: '',
        },
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });
    console.dir(result);
    
    res.render("index", {
      msg: 'transfer sended.'
    });
    // next();
  } catch (error) {
    console.log(error);
    res.render("index", {
      msg: error
    });
    // next(error);
  }
});

// router.post('/', asyncHandler(async (req, res, next) => {
//   var account = req.body.name;
//   if (account == undefined || account == '' || account == null) {
//     res.render("index", {
//       error: 'account error.'
//     });
//     return;
//   }
//   var amount = parseFloat(req.body.amount);
//   if (isNaN(amount) || amount <= 0) {
//     amount = 100;
//   }
//   amount = amount.toFixed(4) + " POC";
//   var config = req.app.get("config");
//   var pcjs = PCJS(config.provider);
//   //账号间转账
//   options = {
//     broadcast: true,
//     sign: true,
//     authorization: 'potato@active'
//   }
//   pcjs.transfer('potato', name, amount.toFixed(4) + " POC", "memo", options)
//     .then((result) => {
//       //console.log(result);
//       pcjs.pushTransaction(result.transaction)
//         .then(result => {
//           res.render("index", {
//             msg: 'transfer sended.'
//           });
//         })
//         .catch(result => {
//           res.render("index", {
//             error: result
//           });
//         });
//     })
//     .catch(error => {
//       console.log(error);
//       res.render("index", {
//         msg: error
//       });
//     });
// }));

module.exports = router;
