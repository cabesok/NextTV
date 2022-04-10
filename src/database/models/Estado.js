module.exports = (sequelize, dataTypes) => {
	let alias = "Estados";
	let columns = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		estado: {
			type: dataTypes.STRING
		}


	};

	let config = {
		tableName: "estado",
		timestamps: false
		};

	const Estado = sequelize.define(alias, columns, config);

    Estado.associate = function(models) {
        Estado.hasMany(models.Creditos , {
            as: "creditos",
            foreignKey: "estado_id"
        }),

		Estado.hasMany(models.Emisiones , {
            as: "emisiones",
            foreignKey: "estado_id"
        })
}

	return Estado;

}