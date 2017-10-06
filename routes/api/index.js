const router = require("express").Router();
const articleRoutes = require("./article");

// Article routes
router.use("/articles", articleRoutes);

module.exports = router;
