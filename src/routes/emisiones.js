const { Router } = require("express");
const express = require("express");
const multer = require("multer");
//const path = require("path");
const router = express.Router();
/* const product = require("../controllers/product"); */
const emisionesController = require("../controllers_db/emisionesController")


// Rutas para base da datos SQL

 
router.get("/emisiones", emisionesController.emisiones);
router.get("/emisiones/crear-emision", emisionesController.crearEmision);
router.get("/emisiones/:id", emisionesController.verEmision);

/* router.get("/creditos/buscar", creditosController.buscar); */
//router.get("/creditos/edit/:id", creditosController.edit);
//router.get("/creditos/detail/:id", creditosController.detail); 


router.post("/emisiones/nuevaemision", emisionesController.nuevaEmision);
router.delete("/emisiones/delete/:id", emisionesController.delete);
router.put("/emisiones/publicar/:id", emisionesController.publicarEmision)


module.exports = router;