const express = require("express");
const bodyParser = require("body-parser");

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
// Dish router operations.
dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next(); // it will continue next code.
  })

  .get((req, res, next) => {
    res.end("Will send all the dishes to you!");
  })

  .post((req, res, next) => {
    res.end(`Will add the dish: ${req.body.name} 
    with details: ${req.body.description}`);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT Operation does not support on dishes");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the dishes!");
  });
// Dish route operations with params.
dishRouter
  .route("/:dishId")
  .get((req, res, next) => {
    res.end(`Will send details of the dish: 
    ${req.params.dishId} to you!`);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST Operation does not support on /dishes/${req.params.dishId}`);
  })
  .put((req, res, next) => {
    res.write(`Updating the dish: ${req.params.dishId} \n`);
    res.end(`Will update the dish: ${req.body.name} with details
      ${req.body.description}`);
  })
  .delete((req, res, next) => {
    res.end(`Deleting dish: ${req.params.dishId}`);
  });

module.exports = dishRouter;
