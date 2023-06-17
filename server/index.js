const express = require("express");
require("dotenv").config();
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.use("/", routes);

app.listen(PORT, console.log(`Servidor arriba en el puerto ${PORT}`));
