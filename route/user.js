import express from 'express';
import userControl from '../control/user.js';

const route = express.Router();

route.post('/signup',userControl.signup);
route.get('/signin',userControl.signin);



export default route;