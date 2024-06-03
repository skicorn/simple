const http = require('http');
const routes = require('./Routes/userRoute');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use("/api/v1", routes);

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected");
    server.listen(process.env.PORT, ()=>{
        console.log(`Server is running in ${process.env.PORT}`);
    })
})
.catch((err) => console.log(err))