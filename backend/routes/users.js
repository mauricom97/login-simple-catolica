const autentication = require("../controllers/users/autentication")

const express = require('express')
const auth = require('../middlewares/auth')
var router = express.Router();

router.post('/autentication', autentication)

module.exports = router