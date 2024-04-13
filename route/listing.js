import express from 'express';
import listingControl from '../control/listing.js';
import { verifyToken } from '../utils/verifytoken.js';
const router = express.Router();


router.post('/create', verifyToken,listingControl.createListing);
router.get('/:id',verifyToken,listingControl.getListingById)

export default router;