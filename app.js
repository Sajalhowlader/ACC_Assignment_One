const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const getAllUsersRoute = require("./Routes/V1/UsersInfoRoutes/getAllUsers.route");
const saveAuserRoute = require("./Routes/V1/UsersInfoRoutes/saveAusers.route");
const updateAusers = require("./Routes/V1/UsersInfoRoutes/updateUser.route");

app.use("/user", getAllUsersRoute);
app.use("/user", saveAuserRoute);
app.use("/user", updateAusers);

app.use("/", (req, res) => {
  res.send("server is running");
});
module.exports = app;
