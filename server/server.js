const express = require("express"); // server software
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();

app.use(
  cors({
    // not work with vite port auto generate: 127.0.0.1
    origin: "http://localhost:3001",
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // Access-Control-Allow-Origin
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
