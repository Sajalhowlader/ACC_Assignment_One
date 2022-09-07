const users = require("../../Users");

const getAllUsers = (req, res) => {
  res.json(users);
};
module.exports = {
  getAllUsers,
};
