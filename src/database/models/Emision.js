module.exports = (sequelize, dataTypes) => {
	let alias = "Emisiones";
	let columns = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		fecha: {
			type: dataTypes.DATEONLY
		},
		programa_id: {
			type: dataTypes.INTEGER
		},
		estado_id: {
			type: dataTypes.INTEGER
		}


	};

	let config = {
		tableName: "emisiones",
		timestamps: false
		};

	const Emision = sequelize.define(alias, columns, config);

    Emision.associate = function(models) {
        Emision.hasMany(models.Creditos , {
            as: "creditos",
            foreignKey: "emision_id"
        }),

        Emision.belongsTo(models.Programas , {
            as: "programa",
            foreignKey: "programa_id"
        }),
		
		Emision.belongsTo(models.Estados , {
            as: "estado",
            foreignKey: "estado_id"
        })
}

	return Emision;

}