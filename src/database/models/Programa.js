module.exports = (sequelize, dataTypes) => {
	let alias = "Programas";
	let columns = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		programa: {
			type: dataTypes.STRING
		}


	};

	let config = {
		tableName: "programas",
		timestamps: false
		};

	const Programa = sequelize.define(alias, columns, config);

    Programa.associate = function(models) {
        Programa.hasMany(models.Emisiones , {
            as: "emision",
            foreignKey: "programa_id"
        }),
        Programa.hasMany(models.Creditos , {
            as: "credito",
            foreignKey: "programa_id"
        })
    }

	return Programa;

}