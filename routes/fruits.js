const express = require("express");
const fruitsRouter = express.Router();

const fruits = require("../controllers/fruits");
// define endpoints
// path and callback functions, is in controllers, 
// need to import this

fruitsRouter.get("/", fruits.index);
fruitsRouter.get("/:name", fruits.show);
fruitsRouter.post("/", fruits.create);
fruitsRouter.patch("/:name", fruits.update);
fruitsRouter.delete("/:name", fruits.destroy);

module.exports = fruitsRouter;