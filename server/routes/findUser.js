const express = require('express')
const findUser = require('../controllers/findUser.js')

const router = express.Router();

router.post('/find', findUser)

module.exports = router
