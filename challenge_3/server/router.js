const router = require('express').Router()

const controller = require('./controller.js')

router
  .route('/login')
  .get(controller.getLogin)
  .post(controller.postLogin)

// router
//   .route('/shipping')
//   .get(controller.getShipping)
//   .post(controller.postShipping)

// router
//   .route('/login')
//   .get(controller.getLogin)
//   .post(controller.postLogin)

module.exports = router;