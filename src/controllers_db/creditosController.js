let db = require("../database/models");
//const Op = Sequelize.Op
const {Op} = require("sequelize");

let creditosController = {

    creditos: function(req, res) {
        db.Creditos.findAll({
            where: {
            estado_id: 1
        },
            order: [["id","DESC"]]})
        .then(function(creditos) {
        res.render("../views/creditos/creditos.ejs", {style: "creditos.css", title: "Créditos Recientes", creditos:creditos})
    })
    },

    /* crearEmision: function(req, res) {
        db.Products.findAll({where: {
            category_id: 1
        }})
        .then(function(products) {
        res.render("../views/creditos/crear-emision.ejs", {style: "crear-emision.css", title: "Crear Emisión"})
    }, */

    buscar: function(req, res) {
        /* db.Products.findAll({where: {
            category_id: 1
        }})
        .then(function(products) { */
        res.render("../views/creditos/buscar.ejs", {style: "buscar.css", title: "Buscar"})
    },

    buscarCreditos: function(req, res) {
    /* db.Products.findAll({
        where: {
            name: {
                [Op.like]: '%' + req.query.search + '%' }
        }
    })
    .then(function(products) {
    res.render("products/buscar", {style: "buscar.css", title: "Buscar", products:products})
    }} */
    },

    /* emisiones: function(req, res) {
        db.Emisiones.findAll()
        .then(function(emisiones) {
        res.render("../views/creditos/emisiones.ejs", {style: "emisiones.css", title: "Emisiones", emisiones:emisiones})})
    }, */

   

    /* modificarcredito: function(req, res) {
        db.Products.findAll({where: {
            category_id: 1
        }})
        .then(function(products) {
        res.render("../views/creditos/modificarcredito.ejs", {style: "modificarcredito.css", title: "Modificar Credito"})
    }, */

    nuevocredito: function(req, res) {
        /* db.Products.findAll({where: {
            category_id: 1
        }})
        .then(function(products) { */
        res.render("../views/creditos/nuevocredito.ejs", {style: "nuevocredito.css", title: "Nuevo Crédito"})
    },

    utilizar: function(req, res) {

        let pedidoCredito = db.Creditos.findByPk(req.params.id);
        let pedidoEmisiones = db.Emisiones.findAll();

        Promise.all([pedidoCredito, pedidoEmisiones])
            .then(function([credito, emisiones]){
                res.render("../views/creditos/utilizar.ejs", {style: "utilizar.css", title: "Utilizar", credito:credito , emisiones:emisiones })
            })
    },

        

    utilizarBack: function(req, res) {
        db.Creditos.update({

            emision_id: req.body.numeroEmision,
            estado_id: 2,
            posicion: req.body.posicion,
            bloque: req.body.bloque

        }, {where: {
            id: req.params.id
        }}).then(res.redirect("/creditos"));
    },

    agregar: function(req, res) {
        db.Creditos.create({
            nombre: req.body.nombre,
            cargo: req.body.cargo,
            fecha: req.body.fecha,
            localidad: req.body.localidad,
            descripcion: req.body.descripcion,
            emision_id: null,
            estado_id: 1,
            programa_id: req.body.programa
            
        })
        
        /* console.log(req.body); */
        res.redirect("/creditos");
        /* res.send(req.body); */
    },

    delete: function(req, res) {
        db.Creditos.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/creditos")
    },

    modificarcredito: function(req, res) {

        /* let pedidoCredito = db.Creditos.findByPk(req.params.id);
        let pedidoCategorias = db.Productscategories.findAll();

        Promise.all([pedidoCredito, pedidoCategorias])
            .then(function([product, categories]){
                res.render("products/editProduct", {style: "editProduct.css", title: "Product | Edit", product:product , categories:categories })
            }) */

        db.Creditos.findByPk(req.params.id)
            .then(function(credito){
                res.render("../views/creditos/modificarcredito.ejs", {style: "modificarcredito.css", title: "Modificar Credito", credito:credito})
            })
    },

    actualizar: function(req, res) {
        
        db.Creditos.update({

            nombre: req.body.nombre,
            cargo: req.body.cargo,
            fecha: req.body.fecha,
            localidad: req.body.localidad,
            descripcion: req.body.descripcion,
            emision_id: null,
            estado_id: 1,
            programa_id: req.body.programa

        }, {where: {
            id: req.params.id
        }}).then(res.redirect("/creditos"));
},

noPublicar: function(req, res) {
        
    db.Creditos.update({

        emision_id: null,
        estado_id: 1,
        
    }, {where: {
        emision_id: req.params.id
    }}).then(res.redirect("/creditos"));
}

}



module.exports = creditosController;