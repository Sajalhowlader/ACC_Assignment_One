const router = require("express").Router();
const {
  saveAuser,
} = require("../../../Controllers/UsersInformation/saveAusers");

router.post("/save", saveAuser);
module.exports = router;
