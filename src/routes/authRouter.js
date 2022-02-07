import { Router } from 'express';
import { signIn, signUp } from '../controllers/authController.js';
import validateSignUp from '../middlewares/validateSignUp.js'
import validateSignIn from '../middlewares/validateSignIn.js';

const authRouter = Router();

authRouter.post('/sign-up', validateSignUp, signUp);
authRouter.post('/sign-in', validateSignIn, signIn);

export default authRouter;