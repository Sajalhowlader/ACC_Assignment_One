const router = require("express").Router();
const { getAllUsers } = require("../../../Controllers/UsersInformation/getAllUsers");



router.get("/all",getAllUsers)


module.exports = router