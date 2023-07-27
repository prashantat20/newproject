const express = require('express');
const server = express();
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');


async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb+srv://prashantkumar62998:Prashant%402001@cluster0.oq8kdl9.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB Connectedddd!!!!!!!!!!!");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
}

connectToDatabase();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000, function check(error) {
    if (error) {
        console.log("errorr");
    } else {
        console.log("startedddddd");
    }
});
