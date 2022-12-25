require("dotenv").config();
const express = require("express");
const db = require("./connect");
const studentRoutes = require("./Routers/studentRouter");
const mentorRoutes = require("./Routers/mentorRouter");

const app = express();
db();

app.use(express.json());


// Adding Custom Middleware
app.use("/", studentRoutes);
app.use("/", mentorRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Assinging mentor application');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started`);
});