const express = require('express')
const router = express.Router()
const controller = require('./controller')

router
  .route('/')
  .get(controller.get)
  .post(controller.post)


module.exports = router;