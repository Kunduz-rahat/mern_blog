import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import authRoute from './routes/auth.js';
import postRoute from './routes/post.js';
import commentRoute from './routes/comment.js';


const app = express();
dotenv.config();
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static('uploads'));

app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/comments', commentRoute);

// app.use(express.static(path.join(__dirname, '../client/build')))
// app.get('*', function(req, res){
//   res.sendFile(path.join(__dirname, '../client/build/index.html'))
// })

async function start() {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.dg6ylqc.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    );
    app.listen(DB_PORT, () => console.log(`server started on Port ${DB_PORT}`));
  } catch (e) { console.log(e)}
}
start();
