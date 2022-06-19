import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

dotenv.config();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Connected to DB and listening on port ${process.env.PORT}`)
    )
  )
  .catch((err) => console.log(err));

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
