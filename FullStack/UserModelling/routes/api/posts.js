const router = require("express").Router();
router.get("/", (request, response) => {
  response.send("Post route");
});
module.exports = router;
