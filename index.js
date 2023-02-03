const express = require('express');
let app = express();
const mongoose = require("mongoose");
const cors = require('cors')
app.use(express.json())
app.use(cors());
mongoose
.connect("mongodb+srv://saad:saad@cluster0.io7ziqi.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Connected!"))
.catch((err) => console.log("errr===>", err));



app.use("/user", require("./users"));
app.use("/adminUser", require("./adminUser"));


const PORT = 3002;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
