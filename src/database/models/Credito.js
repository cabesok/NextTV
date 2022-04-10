module.exports = (sequelize, dataTypes) => {
	let alias = "Creditos";
	let columns = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: dataTypes.STRING
		},
		cargo: {
			type: dataTypes.STRING
		},
		fecha: {
			type: dataTypes.DATEONLY
		},
		localidad: {
			type: dataTypes.STRING
		},
		descripcion: {
			type: dataTypes.STRING
		},
		posicion: {
			type: dataTypes.INTEGER
		},
		bloque: {
			type: dataTypes.INTEGER
		},
		emision_id: {
			type: dataTypes.INTEGER
		},
		estado_id: {
			type: dataTypes.INTEGER
		},
		programa_id: {
			type: dataTypes.INTEGER
		}

	};

	let config = {
		tableName: "creditos",
		timestamps: false
		};

	const Credito = sequelize.define(alias, columns, config);
	    
    Credito.associate = function(models) {
        Credito.belongsTo(models.Emisiones , {
            as: "emision",
            foreignKey: "emision_id"
        }),
		Credito.belongsTo(models.Estados , {
            as: "estado",
            foreignKey: "estado_id"
        }),
		Credito.belongsTo(models.Programas , {
            as: "programa",
            foreignKey: "programa_id"
        })
}

	return Credito;

}
