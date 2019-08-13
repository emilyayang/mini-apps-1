const router = require('express').Router()

const controller = require('./controller.js')

router
  .route('/upload_json')
  .get(controller.get)
  .post(controller.post)

module.exports = router;