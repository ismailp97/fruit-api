//import dotenv
require('dotenv').config();

const app = require("./app");
const port = process.env.PORT;



// const app = express();
// const fruit = require("./fruits.json");


// app starts here
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
