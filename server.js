const express = require("express");

// Set PORT at 8080 and/or let Heroku set PORT
const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start server and log that it is active
app.listen(PORT, () => {
    console.log("App now listening at localhost:" + PORT);
});