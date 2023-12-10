const express = require('express');
const userRouter = express.Router();

const { register, getAllUsers } = require('../../controllers/user');



userRouter.post('/', register);
userRouter.get('/', getAllUsers);




module.exports = userRouter;