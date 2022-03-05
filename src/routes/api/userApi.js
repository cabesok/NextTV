const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const userApiController = require("../../controllers_db/api/userApiController");
const authMiddleware = require("../../middlewares/authMiddleware");
const guestMiddleware = require("../../middlewares/guestMiddleware");
const userRegisterMiddleware = require("../../middlewares/userRegisterMiddleware");
const userLoginMiddleware = require("../../middlewares/userLoginMiddleware");
/* const user = require("../controllers/user"); */

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../../public/uploads/users'))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + path.extname(file.originalname))
    }
  })
  
  const upload = multer({storage: storage});

router.get("/", /* guestMiddleware, */ userApiController.all); 

/* router.get("/register", guestMiddleware, userController.register);  
router.get("/userDetail", authMiddleware, userController.userDetail); 

router.post("/login", userController.access);
router.post("/save",  upload.single("image"), userRegisterMiddleware ,userController.save);
router.post("/logout", userController.logout); */

module.exports = router;