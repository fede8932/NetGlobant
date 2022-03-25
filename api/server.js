const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const { resolve } = require("path");
require("dotenv").config({ path: resolve(__dirname, "../.env") });
require("./config/passport");
const db = require("./db");
const passport = require("./config/passport");
const routes = require("./routes");

const { SERVER_PORT, SESSION_SECRET } = process.env;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use(express.json());

const sessionStore = new SequelizeStore({ db });

app.use(
  session({
    secret: SESSION_SECRET,
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

db.sync({ force: false }).then(() => {
  app.listen(SERVER_PORT, (req, res) => {
    console.log("Server Listening on port: " + SERVER_PORT);
  });
});
