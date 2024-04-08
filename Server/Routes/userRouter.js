// userRouter.js
const express = require('express');
const {RegisterUser,LoginUser,findUser,findAllUsers}=require('../Controllers/userController');

const router = express.Router();

// router.get('/register', (req, res) => {
//     res.send("Register");
// });

router.post('/register',RegisterUser);
router.post('/login',LoginUser);
router.get('/find/:userId',findUser);
router.get('/' ,findAllUsers);


module.exports = router;