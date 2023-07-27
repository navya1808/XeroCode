const app = require("./app");
const connectToDatabase = require("./db");
const apiRoutes = require("./Routes/api");

connectToDatabase();

app.use(`/api`, apiRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
