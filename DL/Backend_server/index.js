const express = require("express");
const bodyparse = require("body-parser")
const connection = require("./Database/db.js")
const Routes = require("./Server/Router.js")
const cors = require("cors");




const app = express();
app.use(bodyparse.json({extended : true}));
app.use(bodyparse.urlencoded({extended: true}))
app.use(cors())


app.post("/scrub", Routes)
connection();





app.listen(5000, console.log("Server is live"))