
const {setGlobalOptions} = require("firebase-functions");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

setGlobalOptions({maxInstances: 10});

app.get("/api", (res)=>{
  res.send("Hello from Firebase + Express!");
});
app.post("/echo", (req, res) => {
  const {message} = req.body;
  res.json({echo: message || "No message provided"});
});

exports.api = functions.https.onRequest(app);

