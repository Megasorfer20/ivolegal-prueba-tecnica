const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mercancias', {
    id_mercancia: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_facturas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'facturas',
        key: 'id_facturas'
      }
    },
    fecha_recepcion_mercancia: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    url_soporte_recepcion_mercancia: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    concepto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    valor: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    IVA: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mercancias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_mercancia" },
        ]
      },
      {
        name: "id_facturas",
        using: "BTREE",
        fields: [
          { name: "id_facturas" },
        ]
      },
    ]
  });
};
