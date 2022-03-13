const express = require("express");
const router = express.Router();
/* const path = require("path"); */
/* const multer = require("multer"); */
const userController = require("../controllers_db/userController");
//const authMiddleware = require("../middlewares/authMiddleware");
//const guestMiddleware = require("../middlewares/guestMiddleware");
//const userRegisterMiddleware = require("../middlewares/userRegisterMiddleware");
//const userLoginMiddleware = require("../middlewares/userLoginMiddleware");
/* const user = require("../controllers/user"); */



router.get("/user/login", userController.login);    
//router.get("/register", guestMiddleware, userController.register);  
//router.get("/userDetail/:id?", authMiddleware, userController.userDetail);
//router.get("/userEdit/:id", authMiddleware, userController.userEdit); 

router.post("/user/login", userController.access);
//router.post("/save",  upload.single("image"), userRegisterMiddleware ,userController.save);
//router.put("/edit/:id", upload.single("image"), userController.edit);
//router.post("/logout", userController.logout);
//router.delete("/delete/:id", userController.delete);


module.exports = router;

