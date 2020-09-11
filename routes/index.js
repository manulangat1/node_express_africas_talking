const express = require('express')
const { Index } = require('../controllers/menu')

const router = express.Router()


router.route('/').post(Index)

module.exports = router 