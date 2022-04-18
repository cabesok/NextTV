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

    creditosFiltrar: function(req, res) {
        if (req.body.programa != 0){
            db.Creditos.findAll({
                where: {
                estado_id: 1,
                programa_id: req.body.programa
            },
                order: [["id","DESC"]]})
            .then(function(creditos) {
            res.render("../views/creditos/creditos.ejs", {style: "creditos.css", title: "Créditos Recientes", creditos:creditos})
        })} else {
            db.Creditos.findAll({
                where: {
                estado_id: 1
            },
                order: [["id","DESC"]]})
            .then(function(creditos) {
            res.render("../views/creditos/creditos.ejs", {style: "creditos.css", title: "Créditos Recientes", creditos:creditos})
        })
        }
    },

    buscar: function(req, res) {
    db.Creditos.findAll({
        where: {
            /* nombre: { [Op.like]: '%' + req.query.search + '%' }, */
            [Op.or]: [
                { descripcion: { [Op.like]: '%' + req.query.search + '%' } },
                { nombre: { [Op.like]: '%' + req.query.search + '%' } },
                { cargo: { [Op.like]: '%' + req.query.search + '%' } },
                { localidad: { [Op.like]: '%' + req.query.search + '%' } }
            ]},
        order: [["id","DESC"]],
        
        include: [{ all: true }]
        
    })
    .then(function(creditos) {
        console.log(creditos);
    res.render("../views/creditos/buscar", { style: "buscar.css", title: "Resultados Búsqueda", creditos:creditos })
    }).catch(function(err){
        console.log(err)
    })
    },

    nuevocredito: function(req, res) {
        
        res.render("../views/creditos/nuevocredito.ejs", {style: "nuevocredito.css", title: "Nuevo Crédito"})
    },

    utilizar: function(req, res) {

        let pedidoCredito = db.Creditos.findByPk(req.params.id);
        let pedidoEmisiones = db.Emisiones.findAll({
            where: {estado_id: 1},
            order: [["id","DESC"]],
            include:[{association:"programa"}]});

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
            
        }).then(function(){
            res.redirect("/creditos");
            })
        
        
        /* console.log(req.body); */
        
        /* res.send(req.body); */
    },

    delete: function(req, res) {
        db.Creditos.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(){
            res.redirect("/creditos");
            })
        
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