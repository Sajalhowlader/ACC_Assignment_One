const express = require("express");
const app = express();

const getAllUsersRoute = require("./Routes/V1/UsersInfoRoutes/getAllUsers.route");

app.use("/user", getAllUsersRoute);
module.exports = app;
