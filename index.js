require("dotenv/config");
const express = require('express');
const CORS = require("cors")

const app = express();
app.use(CORS());
app.use(express.json());

app.use("/api/events", require("./api/events/events.routes"));
app.use("/api/persons", require("./api/persons/persons.routes"));

app.listen(8000, () => console.log('Server is run on port 8080'))