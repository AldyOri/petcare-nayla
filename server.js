require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");

const app = express();

app.use(express.json());
app.use("/api", routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at port :${PORT}`);
});
