import express from "express";

const app = express();

// Codesanbox does not need PORT :)

const midOne = (req, re, next) => {
  console.log("i'm a middleware");
  next();
};

const midTwo = (req, res) => {
  console.log("Not protected");
  res.redirect("/");
};

const home = (req, res) => res.rende("Home");
const aboutUs = (req, res) => res.send("About Us");
const fcontact = (req, res) => res.send("Contact");
const fprotected = (req, res) => res.send("Protected");

app.use(midOne());

app.get("/", home);
app.get("/about-us", aboutUs);
app.get("/contact", fcontact);
app.get("/protected", midTwo(), fprotected);

app.listen(() => console.log(`Listening!`));
