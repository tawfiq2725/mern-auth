import express from "express";
const PORT = process.env.APP_PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("checking");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} -> http://localhost:${PORT}`);
});
