const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes")
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://sanskarswaraj:sanskarswaraj@netflix-cluster.4foo4zf.mongodb.net/test?authMechanism=SCRAM-SHA-1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => {
    console.log("DB Connected");
});

app.use("/api/user", userRoutes);

app.listen(4000, console.log("server started"));