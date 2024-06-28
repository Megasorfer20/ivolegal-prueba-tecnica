var DataTypes = require("sequelize").DataTypes;
var _abonos = require("./abonos");
var _acreedores = require("./acreedores");
var _deudores = require("./deudores");
var _facturas = require("./facturas");
var _mercancias = require("./mercancias");

function initModels(sequelize) {
  var abonos = _abonos(sequelize, DataTypes);
  var acreedores = _acreedores(sequelize, DataTypes);
  var deudores = _deudores(sequelize, DataTypes);
  var facturas = _facturas(sequelize, DataTypes);
  var mercancias = _mercancias(sequelize, DataTypes);

  facturas.belongsTo(acreedores, {
    as: "id_acreedor_acreedore",
    foreignKey: "id_acreedor",
  });
  acreedores.hasMany(facturas, { as: "facturas", foreignKey: "id_acreedor" });
  facturas.belongsTo(deudores, {
    as: "id_deudor_deudore",
    foreignKey: "id_deudor",
  });
  deudores.hasMany(facturas, { as: "facturas", foreignKey: "id_deudor" });
  mercancias.belongsTo(facturas, {
    as: "id_facturas_factura",
    foreignKey: "id_facturas",
  });
  facturas.hasMany(mercancias, { as: "mercancia", foreignKey: "id_facturas" });

  return {
    abonos,
    acreedores,
    deudores,
    facturas,
    mercancias,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
