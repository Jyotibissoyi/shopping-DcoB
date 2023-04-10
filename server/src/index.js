const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const route = require('./router/route');
const app=express();
//mongodb+srv://Pratham_Panchariya:shree79766@cluster0.yd3rrae.mongodb.net/Project-5
const port = process.env.PORT || 3001;
const url ="mongodb+srv://Pratham_Panchariya:shree79766@cluster0.yd3rrae.mongodb.net/Project-5";

app.use(cors())
app.use(express.json());

mongoose.connect(url)
.then(() => console.log("Mongoose is Connected"))
.catch((err) => console.log(err));

app.use('/',route);

app.listen(port, () => console.log(`Server is Running 😎😎😎 ${port}`));
