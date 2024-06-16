import express from 'express';
import { register, login,users } from '../controllers/authController';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', users);

export default router;
