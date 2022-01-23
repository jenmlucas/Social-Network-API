const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  addFriend,
  updateUser,
  deleteUser,
  removeFriend
} = require("../../controllers/user-controller");

//Set up GET all and POST at /api/Users
router.route("/").get(getAllUsers).post(createUser);

//Set up GET one, PUT, and DELETE at /api/Users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

//ADD AND DELETE Friend 
router.route("/:userId/friends/:friendId").put(addFriend).delete(removeFriend);

module.exports = router;