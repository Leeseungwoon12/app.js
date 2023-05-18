const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

app.use(express.urlencoded({ extended: ture }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`localhost:${PORT} 실행`);
});
