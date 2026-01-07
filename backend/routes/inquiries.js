import express from 'express';
import { getInquiries, createInquiry, deleteInquiry } from '../controllers/inquiryController.js';

const router = express.Router();

router.get('/', getInquiries);
router.post('/', createInquiry);
router.delete('/:id', deleteInquiry);

export default router;
