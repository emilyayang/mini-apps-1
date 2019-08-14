const Sequelize = require('sequelize');
const checkout = require('./index.js');

const Login = checkout.define('login', {
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

const Shipping = checkout.define('shipping', {
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

const Payment = checkout.define('payment', {
  // attributes
  cc: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  exp: {
    type: Sequelize.STRING,
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

checkout.sync()

module.exports = Login;
module.exports = Shipping;
module.exports = Payment;