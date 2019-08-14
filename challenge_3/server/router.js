const router = require('express').Router()

const controller = require('./controller.js')

router
  .route('/')
  .post(controller.post)

// router
//   .route('/login')
//   .get(controller.get)

// router
//   .route('/shipping')
//   .get(controller.get)

// router
//   .route('/payment')
//   .get(controller.get)

// .post(controller.post)
// .update(controller.update)
// .delete(controller.delete)

module.exports = router;