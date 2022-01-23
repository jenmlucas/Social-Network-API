const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  addReaction,
  updateThought,
  deleteThought,
  removeReaction
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts).post(createThought);

router.route("/:Id").get(getThoughtById).put(updateThought).delete(deleteThought);

router.route('/thoughts/:thoughtId/reactions').post(addReaction);

router.route('/thoughts/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
