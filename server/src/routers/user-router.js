const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');
const isAuthenticated = require('../middlewares/authValidation');
const authorize = require('../middlewares/roleValidation');

// Unprotected endpoints
router.post('/', userController.createUser);

// Session validation
router.use(isAuthenticated)

// Protected endpoints 
router.get('/all', authorize('admin'), userController.getUsers)
router.get('/:id', userController.getUser)
router.patch('/id', userController.updateUser)

module.exports = router