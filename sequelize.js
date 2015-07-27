var Sequelize = require('sequelize');
var sequelizeInstance = new Sequelize("foreignkey", "root", "foodz410");

var person = sequelizeInstance.define('person', {
  LastName: Sequelize.STRING,
  FirstName: Sequelize.STRING,
  Address: Sequelize.STRING,
  City: Sequelize.STRING
});

var order = sequelizeInstance.define('order', {
  OrderNo: Sequelize.INTEGER
});

person.hasMany(order);
order.belongsTo(person);

person.sync();
order.sync();


exports.person = person;
exports.order = order;