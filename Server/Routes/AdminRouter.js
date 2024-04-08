const express = require('express');
const router = express.Router();
const {RegisterAdmin,FindAdmin,FindAllAdmins,AdminLogin} = require('../Controllers/AdminController');

router.post('/registerAdmin', RegisterAdmin);
router.post("/login",AdminLogin)
router.get('/FindAdmin/:AdminId',FindAdmin);
router.get('/Find',FindAllAdmins);

module.exports = router;