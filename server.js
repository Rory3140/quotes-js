"use strict";

const express = require("express");
const app = express();

let categories = ["successQuotes", "perseveranceQuotes", "happinessQuotes"];

let successQuotes = [
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
];

let perseveranceQuotes = [
  {
    quote:
      "It’s not that I’m so smart, it’s just that I stay with problems longer.",
    author: "Albert Einstein",
  },
  {
    quote: "Perseverance is failing 19 times and succeeding the 20th.",
    author: "Julie Andrews",
  },
];

let happinessQuotes = [
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote:
      "For every minute you are angry you lose sixty seconds of happiness.",
    author: "Ralph Waldo Emerson",
  },
];

app.get("/quotebook/categories", function (req, res) {
  res.type("text");
  let response = "";
  categories.forEach((category) => {
    response += "A possible category is " + category + "\n";
  });
  res.send(response);
});

app.get("/quotebook/quote/:category", function (req, res) {
  res.type("json");
  let category = req.params.category;
  let response;
  let randomIndex;

  switch (category) {
    case "successQuotes":
      randomIndex = Math.floor(Math.random() * successQuotes.length);
      response = successQuotes[randomIndex];
      break;
    case "perseveranceQuotes":
      randomIndex = Math.floor(Math.random() * perseveranceQuotes.length);
      response = perseveranceQuotes[randomIndex];
      break;
    case "happinessQuotes":
      randomIndex = Math.floor(Math.random() * happinessQuotes.length);
      response = happinessQuotes[randomIndex];
      break;
    default:
      res.type("text").status(400).send("Error, Bad Request!");
      break;
  }
  res.send(response);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
