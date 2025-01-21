const express = require("express");
const cors = require("cors");
const app = express();

const logger = require("./logger");

//middleware sits between incoming request and final response, performs logging as well
app.use(cors());
app.use(express.json());
app.use(logger);


const fruitsRouter = require("./routes/fruits")


// doesnt need to 
// const fruit = require("./fruits.json");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// send back a message saying hello person
app.get("/", (req, res) => {
  res.send("Hello fruity!");
});

// another root
// app.get("/fruits/:name", (req, res) => {
    // res.send({ fruit: "ismail" });
  // res.send(`Return a fruit with id!` + req.params.name);
// });


// related to the controller, both routed through fruits
// app.get("/fruits", index);
// app.get("/fruits/:name", show);

app.use("/fruits", fruitsRouter)

// similar to fetch request to specfic fruit
// app.get("/person/:name", (req, res) => {
//   const personName = req.params.name;
//   res.send(personName);
// });

//sendstatus = 304

//forbidden - 403

module.exports = app