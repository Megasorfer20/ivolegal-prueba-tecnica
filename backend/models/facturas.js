const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facturas', {
    id_facturas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cufe: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    numero_factura: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    fecha_emision: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_vencimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_remision_factura: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_acreedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'acreedores',
        key: 'id_acreedor'
      }
    },
    id_deudor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'deudores',
        key: 'id_deudor'
      }
    },
    fecha_recepcion_factura: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'facturas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_facturas" },
        ]
      },
      {
        name: "id_acreedor",
        using: "BTREE",
        fields: [
          { name: "id_acreedor" },
        ]
      },
      {
        name: "id_deudor",
        using: "BTREE",
        fields: [
          { name: "id_deudor" },
        ]
      },
    ]
  });
};
