import express from 'express';
import listingControl from '../control/listing.js';
import { verifyToken } from '../utils/verifytoken.js';
const router = express.Router();


router.post('/create', verifyToken,listingControl.createListing);
router.get('/:id',listingControl.getListingById)
router.delete('/:id',verifyToken,listingControl.deleteListingId);
router.patch('/:id',verifyToken,listingControl.updateListingId)
router.get('/',verifyToken,listingControl.getListingAll)
export default router;