import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes.js';

dotenv.config();

const app=express();
const PORT=process.env.PORT||5000


app.use(cors());
app.use(express.json());

app.use('/api/posts',postRoutes);

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('MongoDb connected');
    app.listen(PORT,()=> console.log(`Server running on ${PORT}`));
})
.catch((err)=>console.log('DB connection failed:',err));
