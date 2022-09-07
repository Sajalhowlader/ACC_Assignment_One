const router = require("express").Router();

const {
  deleteAuser,
} = require("../../../Controllers/UsersInformation/deleteAuser");

router.delete("/:id", deleteAuser);
module.exports = router;
