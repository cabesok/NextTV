const { Router } = require("express");
const express = require("express");
const multer = require("multer");
//const path = require("path");
const router = express.Router();
/* const product = require("../controllers/product"); */
const creditosController = require("../controllers_db/creditosController")


/* var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, path.extname(file.originalname).indexOf("jpg") != -1 ? path.resolve(__dirname, "../../public/uploads", "products") : path.resolve(__dirname, "../../public/uploads", "users") )
    cb(null, path.join(__dirname, '../../public/uploads/products'))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + path.extname(file.originalname))
    // cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`)
  }
})

const upload = multer({storage: storage}); */



// Rutas para base da datos SQL

router.get("/creditos", creditosController.creditos); 
/* router.get("/creditos/crear-emision", creditosController.crearEmision); */
router.get("/creditos/buscar", creditosController.buscar);
/* router.get("/creditos/emisiones", creditosController.emisiones); */
router.get("/creditos/login", creditosController.login);
router.get("/creditos/nuevocredito", creditosController.nuevocredito);
router.get("/creditos/utilizar/:id", creditosController.utilizar);
router.get("/creditos/modificarcredito/:id", creditosController.modificarcredito);

//router.get("/creditos/edit/:id", creditosController.edit);

//router.get("/creditos/detail/:id", creditosController.detail); 

router.put("/creditos/actualizar/:id", creditosController.actualizar)
router.post("/creditos/agregar", creditosController.agregar);
/* router.post("/creditos/nuevaemision", creditosController.nuevaEmision); */
router.delete("/creditos/delete/:id", creditosController.delete);
router.put("/creditos/utilizar/:id", creditosController.utilizarBack);
router.put("/creditos/nopublicar/:id", creditosController.noPublicar);

//router.post("/creditos/edit/:id",  /* upload.single("image"), */ creditosController.actualizar);
//router.delete("/delete/:id", creditosController.delete);

// Rutas para base da datos JSON

/* router.get("/", product.list); */  

/* router.get("/componentes", product.componentes);  
router.get("/create", product.create);
router.get("/cart", product.cart);
router.get("/:id", product.detail);
router.get("/edit/:id", product.edit);

router.post("/save", upload.single("image"), product.save);
router.put("/update/:id", product.update);
router.delete("/:id", product.delete); */

module.exports = router;