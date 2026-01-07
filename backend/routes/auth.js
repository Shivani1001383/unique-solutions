import express from 'express';
import { loginUser, updateCredentials } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', loginUser);
router.put('/update', updateCredentials);

export default router;
