const express = require("express");
const qrcode = require("qrcode");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("/public"));
app.use("/css", express.static(__dirname + "/public/css/"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "QR Code Scanner" });
});

app.post("/", (req, res) => {
  const { url } = req.body;

  qrcode.toDataURL(url, (err, src) => {
    res.render("index", { title: "QR Code Scanner", src });
  });
});

const port = process.env.PORT;

app.listen(port);
