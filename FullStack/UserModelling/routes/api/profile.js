const router = require("express").Router();
router.get("/", (request, response) => {
  response.send("profile route");
});
module.exports = router;
