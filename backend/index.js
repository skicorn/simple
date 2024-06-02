const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./Routes/userRoute')

dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());

app.use('/api', userRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Connected success"))
.catch((err) => console.log(err))

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running in ${process.env.PORT}`);
})