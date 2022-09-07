const users = require("../../Users");

const deleteAuser = (req, res) => {
  const { id } = req.params;

  const deleteUser = users.filter((user) => user.id !== Number(id));

  
  res.send(deleteUser);
};
module.exports = {
    deleteAuser,
};
