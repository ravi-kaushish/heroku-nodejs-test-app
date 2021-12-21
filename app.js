const express = require('express');
const bodyParser = require('body-parser');
const { CORS } = require('./config/config.js');

//Initializing app
const app = express();

//Setting port to run app
const PORT = process.env.PORT || 8000;

//Enabling CORS
app.use(CORS);

//Using bodyparser middleware
app.use(bodyParser.json());

//test route
app.get("/", (req, res) => {
    res.send("Hello, Your app is up and running");
});

//Importing routes
const RedisTest = require('./routes/test');

//Using routes
app.use("/api/test", RedisTest);

// app starts from here
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;