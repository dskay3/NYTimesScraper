const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Router to find all saved articles
// Route: /api/articles
router.route("/")
  .get(articleController.findAll);

// Router to post to saved articles
// Route: /api/articles/saved
router.route("/saved")
  .post(articleController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articleController.findById)
  // .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;
