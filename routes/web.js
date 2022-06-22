import express from 'express';
const router = express.Router();
import {homeControl} from '../controllers/homeControl.js';
import {aboutControl} from '../controllers/aboutControl.js';

router.get('/', homeControl);
router.get('/about', aboutControl);

export default router;