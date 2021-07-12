const express = require('express');
const { 
    userSignup, 
    userLogin, 
    userLogout, 
    userUpdate, 
    logoutAllSessions 
} = require('../controllers/userControllers');

const router = express.Router();

const jwtAuth = require("../middlewares/jwtAuth")


router.post("/signup",userSignup)
router.post("/login",userLogin)

router.patch('/update', jwtAuth, userUpdate)

router.delete('/logout', jwtAuth, userLogout)
router.delete('/logoutall', jwtAuth, logoutAllSessions)


module.exports = router;
