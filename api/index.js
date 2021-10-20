const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));
