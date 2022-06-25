const router = require("express").Router();

router.get("/api", (req, res) => {
  res.send("api routers");
});

module.exports = router;
