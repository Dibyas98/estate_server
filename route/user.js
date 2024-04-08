import express from 'express';
import userControl from '../control/user.js';

const route = express.Router();

route.post('/signup',userControl.signup);
route.post('/signin',userControl.signin);



export default route;