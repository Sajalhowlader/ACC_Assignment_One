const getAllUsers = (req, res) => {
  res.send(users.json);
};
module.exports = {
  getAllUsers,
};
