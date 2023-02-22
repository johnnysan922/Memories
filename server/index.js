import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Memories API')
});

// process.evn.PORT is taken care of by Heroku || 5000 for testing on local machine
const PORT = process.env.PORT || 5000;

// CONNECT TO MONGOOSE
mongoose.set('strictQuery', false);

mongoose.connect(process.env.CONNECTION_URL)    // CONNECTION_URL obtained from mongodb
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));