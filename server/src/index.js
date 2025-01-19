const express = require("express");
const usersRoutes = require("./routes/users.routes");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/users", usersRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
