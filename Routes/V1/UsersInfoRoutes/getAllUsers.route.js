const router = require("express").Router();

const {
  getAllUsers,
} = require("../../../Controllers/UsersInformation/getAllUsers");


router.get('/',getAllUsers)


module.exports = router