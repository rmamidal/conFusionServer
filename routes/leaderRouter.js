const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send the all the leads');
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('Put operation not supported.');
})
.post((req, res, next) => {
    res.end(`Will creat the leader with name: ${req.body.name} and desc: ${req.body.desc}`);
})
.delete((req, res, next) => {
    res.end('Will delete all the leads');
});

leaderRouter.route('/:leaderId')
.get((req, res, next) => {
    res.end(`Will send the lead with id ${req.params.leaderId}`);
})
.put((req, res, next) => {
    res.end(`Will update the lead with name: ${req.body.name} and desc: ${req.body.desc}`);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation is note supported.');
})
.delete((req, res, next) => {
    res.end(`Will delete the lead with id ${req.params.leaderId}`);
}); 

module.exports = leaderRouter;