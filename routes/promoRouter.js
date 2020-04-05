const express = require("express");
const bodyParser = require("body-parser");

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

// Promo operations
promoRouter
.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the promos to you!');
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('Put operation not supported with no params');
})
.post((req, res, next) => {
    res.end(`Will create the new Promotion with  name: ${req.body.name} and desc: ${req.body.desc}`);
})
.delete((req, res, next) => {
    res.end('Will delete all the promotions');
});

// promo operations with params
promoRouter.route('/:promoId')
.get((req, res, next) => {
    res.end(`Will send the promo with promo Id: ${req.params.promoId}`);
})
.put((req, res, next) => {
    res.end(`Will update the promo of name: ${req.body.name} and desc: ${req.body.desc}`);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`Post operation is not supported on promo with params`);
})
.delete((req, res, next) => {
    res.end(`Will delete the promo with promo Id: ${req.params.promoId}`);
});

module.exports = promoRouter;
