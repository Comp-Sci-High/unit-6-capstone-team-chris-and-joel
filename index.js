const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs")
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(__dirname + "/public"))

const mongoDBConnectionString =
  "mongodb+srv://SE12:CSH2025@cluster0.kzjul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.set("view engine", "ejs");

app.use(express.json());

const cshteamsSchema = new mongoose.Schema({
  teamName: { type: String },
  teamImage: { type: String },
  description: { type: String}
})

const gameSchema = new mongoose.Schema({
  score: { type: String },
  date: { type: String },
   result: { type: String },
  opponent: { type: String },
})

const playerSchema = new mongoose.Schema({
  team: {type: String, required: true },
  number: { type: Number, required: true },
  firstName: { type: String, required: true },
   lastName: { type: String, required: true },
  year: { type: Number },
   height: { type: String },
  bio: { type: String },
})

const Cshteams = mongoose.model("cshteam", cshteamsSchema, "cshteams");

const Game = mongoose.model("game", gameSchema, "games");

const Player = mongoose.model("player", playerSchema, "players");


app.post("/add/player", async (req, res)=> {
  const me = await new Player ({
    firstName: req.body.firstName,
    number: req.body.number,
    lastName: req.body.lastName,
    year: req.body.year,
    height: req.body.height,
   bio: req.body.bio
   // number
  }).save()
  res.json(Player)
})

app.get("/", async (req, res)=>{
  const players = await Player.find({})
    res.render("players.ejs", {players})
    //create views and players.ejs
})

app.patch("/player/:_id", async (req, res) =>{
  const response = await Player.findOneAndUpdate({_id: req.params.playerName}, {firstName: req.body.firstName,
    lastName: req.body.lastName,
    number: req.body.number,
    year: req.body.year,
    height: req.body.height,
   bio: req.body.bio})
  res.json(response)
})



app.delete("/delete/player", async (req, res) => {
    const response = await Player.findOneAndDelete({ 
   title: req.params.name
    })
   res.json(response)
})





async function startServer() {

  await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.3tq3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

  app.listen(3000, () => {
    console.log("Server is running");
  });
}

startServer();
