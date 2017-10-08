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

// Router to delete to saved articles 
// Route: /api/articles/saved/:id
router.route("/saved/:id")
  .get(articleController.findById)
  .delete(articleController.remove);

module.exports = router;
