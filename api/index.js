const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");

const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const moviesRouter = require('./routes/movies');

dotenv.config();

const app = express();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.log(err));

app.use(express.json());
app.use(morgan("tiny"));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/movies', moviesRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));
