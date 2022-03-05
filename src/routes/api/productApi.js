const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const productsApiController = require("../../controllers_db/api/productsApiController")


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../../public/uploads/products'))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage});


// Endpoints para APIs

router.get("/", productsApiController.list);
router.get("/categories", productsApiController.productsCategories);
router.get("/:id", productsApiController.detail);  

router.post("/", productsApiController.guardar);
router.delete("/:id", productsApiController.delete);

/* router.get("/crear", productsController.crear);
router.get("/detail/:id", productsController.detail); 
router.get("/edit/:id", productsController.edit);

router.post("/crear", upload.single("image"), productsController.guardar);
router.post("/edit/:id", upload.single("image"), productsController.actualizar);
router.delete("/delete/:id", productsController.delete); */



module.exports = router;