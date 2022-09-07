const users = require("../../Users");

const updateAuser = (req, res) => {
  const { id } = req.params;

  const newUsers = users.find((user) => user.id === Number(id));

  newUsers.id = id;
  newUsers.name = req.body.name;
  newUsers.contact = req.body.contact;
  newUsers.address = req.body.address;
  newUsers.gender = req.body.gender;
  res.send(newUsers);
};
module.exports = {
  updateAuser,
};
