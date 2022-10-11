const express = require("express"); // server software
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const session = require("express-session"); // session middleware
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportStrategy = require("./passport"); // import for run the code inside file (must below the dotenv config for using env value)
const app = express();

// Setup session
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "somesecret",
    cookie: { maxAge: 24 * 60 * 60 * 100 }, // 1 day
  })
);

// If you want to use cookieSession (must install package passport version 0.5.*)
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["cyberwolve"],
//     maxAge: 24 * 60 * 60 * 100, // 1 day
//   })
// );

// Apply session
app.use(passport.initialize());
app.use(passport.session());

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
