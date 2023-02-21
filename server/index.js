import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// CONNECTION_URL obtained from mongodb
// <password>
const CONNECTION_URL = 'mongodb+srv://johnnyss1999:<password>@cluster0.vgseof5.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

// CONNECT TO MONGOOSE
mongoose.set('strictQuery', false);
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));