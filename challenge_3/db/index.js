const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const checkout = new Sequelize('checkout', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

checkout
  .authenticate()
  .then(() => {
    console.log('DB connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = checkout;