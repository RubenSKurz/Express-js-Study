
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const password = "1234";
var userInput = "";

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res , next){
    userInput = req.body["password"];
    console.log(req.body["password"]);
    next();
  };

app.use(checkPassword);

app.post("/check", (req, res) => {
    if (userInput === password) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
    
  });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log(`Server running on Port ${port}.`)
});
