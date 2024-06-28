const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acreedores', {
    id_acreedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Interviniente_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'acreedores',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_acreedor" },
        ]
      },
      {
        name: "Interviniente_id",
        using: "BTREE",
        fields: [
          { name: "Interviniente_id" },
        ]
      },
    ]
  });
};
