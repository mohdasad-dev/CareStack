import express from 'express'
import { registerUser, userLogin, getProfile } from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js'

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', userLogin);


userRouter.get('/get-profile', authUser, getProfile);

export default userRouter;