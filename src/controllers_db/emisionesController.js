let db = require("../database/models");
//const Op = Sequelize.Op
const {Op} = require("sequelize");

let emisionesController = {


    crearEmision: function(req, res) {
        /* db.Products.findAll({where: {
            category_id: 1
        }})
        .then(function(products) { */
        res.render("../views/emisiones/crear-emision.ejs", {style: "crear-emision.css", title: "Crear Emisión"})
    },


    emisiones: function(req, res) {
        db.Emisiones.findAll({
            where: {estado_id: 1},
            order: [["id","DESC"]],
            include:[{association:"programa"}]})
        .then(function(emisiones) {
        res.render("../views/emisiones/emisiones.ejs", {style: "emisiones.css", title: "Emisiones", emisiones:emisiones})})
        .catch(function(err){
            console.log(err)
        })
    },

    nuevaEmision: function(req, res) {
         db.Emisiones.create({
            
            fecha: req.body.fecha,
            programa_id: req.body.programa
            
            
        })
        .then(function(){
            res.redirect("/emisiones")
        })
        .catch(function(err){
            console.log(err)
        })
        /* res.redirect("/emisiones"); */
        
    },
    
    delete: function(req, res) {
        db.Emisiones.destroy({
            where: {
                id: req.params.id
            }
        })
        
        res.redirect("/emisiones");
        
    },

    verEmision: function(req, res) {
        /* db.Emisiones.findByPk(req.params.id)
        .then(function(emision) {
        res.render("../views/emisiones/verEmision.ejs", {style: "verEmision.css", title: "Emision", emision:emision})}) */
        
            
        let pedidoCreditos = db.Creditos.findAll({
            where: {emision_id: req.params.id},
            order: [["bloque","ASC"]]});
        let pedidoEmision = db.Emisiones.findByPk(req.params.id, {include:[{association:"programa"}]} );

        Promise.all([pedidoCreditos, pedidoEmision])
            .then(function([creditos, emision]){
                res.render("../views/emisiones/verEmision.ejs", {style: "verEmision.css", title: "Emision", creditos:creditos, emision:emision})
    })},

    publicarEmision: function(req, res){
        /* db.Emisiones.update({
            where: {
                id: req.params.id
            }
        })
        
        res.redirect("/emisiones"); */


        db.Emisiones.update({
 
            estado_id: 2
            
        }, {where: {
            id: req.params.id
        }}).then(res.redirect("/creditos"));



    }
}



module.exports = emisionesController;