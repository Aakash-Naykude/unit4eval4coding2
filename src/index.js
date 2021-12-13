const express = require("express");
const app = express();
app.use(express.json());

const userController = require("./controllers/user.controller");
app.use("/user", userController)

const movieController = require("./controllers/movie.controller");
app.use("/movie", movieController);

const theatresController = require("./controllers/theatres.controller");
app.use("/theatres", theatresController);

const screenController = require("./controllers/screens.controller");
app.use("/screens", screenController);

const showController = require("./controllers/shows.controller");
app.use("/show", showController);

const seatsController = require("./controllers/seats.controller");
app.use("/seats", seatsController);

module.exports = app;
