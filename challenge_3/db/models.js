const Sequelize = require('sequelize');
const checkout = require('./index.js');

const Login = checkout.define('logins', {
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
    timestamps: false
  });

const Shipping = checkout.define('shippings', {
  // attributes
  line1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  line2: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zip: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
    timestamps: false
  });

const Payment = checkout.define('payments', {
  // attributes
  cc: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  exp: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cvv: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  zip: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
    timestamps: false
  });

Login.hasOne(Shipping);
Login.hasOne(Payment);
Shipping.belongsTo(Login);
Payment.belongsTo(Login);

Login.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return Login.create({
    name: 'John',
    email: 'a@g.com',
    password: "cat"
  });
});
Shipping.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  console.log("synced")

});
Payment.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  console.log("synced")

});
// checkout.sync();

module.exports = Login;
module.exports = Shipping;
module.exports = Payment;