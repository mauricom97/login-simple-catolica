const getClients = require("../controllers/clients/index")

const express = require('express')
const auth = require('../middlewares/auth')
var router = express.Router();

router.get('/', auth, getClients)

module.exports = router