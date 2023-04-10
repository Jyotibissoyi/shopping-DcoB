const express =require("express");
const router =express.Router();
//===============================Importing modules================================>
const { getProducts }= require('../controller/productControlller');
const { createUser, login}= require('../controller/userController');





//=================================API============================================>

router.post('/signup', createUser);

router.post('/login', login);

router.get('/getData', getProducts);









module.exports =router;