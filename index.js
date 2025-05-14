const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(__dirname + "/public"))

app.set("view engine", "ejs");

app.use(express.json());

const internshipSchema = new mongoose.Schema({

  title: { type: String },
  description: { type: String },
  applicationLink: { type: String },
  startDate: { type: Number },
  endDate: { type: Number },
  testimonials: { type: String },
  images: { type: String },

 

})

const Internship = mongoose.model("Internship", countrySchema, "Internships");

app.delete('/title/:title', async (req, res) => {
    const response = await Internship.findOneAndDelete({ 
   
  title: req.params.name
    })
   res.json(response)
})