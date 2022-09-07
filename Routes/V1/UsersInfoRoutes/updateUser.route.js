const router = require("express").Router();

const { updateAuser } = require("../../../Controllers/UsersInformation/updateAuser");

router.patch("/:id", updateAuser);
module.exports = router;