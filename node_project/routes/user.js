const express = require('express'); 
const router = express.Router()
const {
    getUsers, 
    postUser, 
    deleteUsers, 
    getUser, 
    putUser, 
    deleteUser
} = require('../controllers/userController')

router.route('/')
      .get(getUsers)
      .post(postUser)
      .delete(deleteUsers)

router.route('/')
      .get(getUser)
      .post(putUser)
      .delete(deleteUser)

module.exports = router; 