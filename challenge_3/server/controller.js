// const dbhelpers = require('../db/dbhelpers');
const Login = require('../db/models.js');

const controller = {
  getLogin: (req, res) => {
    Login.findAll()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(400).send(err))
  },
  postLogin: (req, res) => {
    Login.create(req.body)
      .then(data => res.status(201).send(data))
      .catch(err => res.status(401).send(err))
  }
  // getShipping: (req, res) => {
  //   Shipping.findAll()
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(400).send(err))
  // },
  // postShipping: (req, res) => {
  //   Shipping.create(req.body)
  //     .then(data => res.status(201).send("posted"))
  //     .catch(err => res.status(401).send(err))
  // },
  // getPayment: (req, res) => {
  //   Payment.findAll()
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(400).send(err))
  // },
  // postPayment: (req, res) => {
  //   Payment.create(req.body)
  //     .then(data => res.status(201).send("posted"))
  //     .catch(err => res.status(401).send(err))
  // }
}

module.exports = controller;