const { application } = require("express");
const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs")

// app.get("/", (req, res) => {
//   res.render("home/index")
// })

app.get("/english", (req, res) => {
  res.render("home/english")
})

app.get("/chinese", (req, res) => {
  res.render("home/chinese")
})

app.use(express.static('./assets'))
app.use(express.static('./style'))
app.use(express.static('./images'))

app.listen(3000, () => {
  console.log("서버 가동")
})