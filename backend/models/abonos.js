const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('abonos', {
    id_abono: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_acreedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_abono: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    valor_abono: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_deudor: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'abonos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_abono" },
        ]
      },
      {
        name: "id_apartamento",
        using: "BTREE",
        fields: [
          { name: "id_acreedor" },
        ]
      },
    ]
  });
};
