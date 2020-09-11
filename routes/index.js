const express = require('express')
const { entryIndexs } = require('../controllers')

const router = express.Router()


router.route('/').post(entryIndexs)

module.exports = router 