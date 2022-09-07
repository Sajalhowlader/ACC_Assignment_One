const users = require("../../Users");

const saveAuser = (req, res) => {
  users.push(req.body)
  res.send(users)
};
module.exports = {
    saveAuser,
};