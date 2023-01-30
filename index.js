const express = require('express');
const app = express();
const mongoose = require("mongoose");
app.use(express.json())

mongoose
  .connect("mongodb+srv://saad:saad@cluster0.io7ziqi.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("errr===>", err));



app.use("/user", require("./users"));


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
