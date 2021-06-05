const express = require("express");
const app = express();
const hbs = require("hbs");
require("./db/database");
const path = require("path");
const port = process.env.PORT || 3000;
const Register = require("./models/register.js")




app.use(express.json());
app.use(express.urlencoded({extended : false}));


const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");





app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set ("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req,res) => {
    res.render("Main")
});

app.get ("/protfolio", (req,res) => {
    res.render("protfolio") 
});
app.get("/shoptemplates",(req,res) => {
    res.render("templates")
});
app.get("/register", (req,res)=> {
    res.render("register")
})
app.get("/404", (req,res) => {
    res.render("404")
})
app.get("*", (req,res)=> {
    res.render("404")
})


app.post("/register", async (req , res)=> {
    try {
const registerEmploy = new Register ({
    Name : req.body.Name,
    Email : req.body.email,
    Phone : req.body.phonenumber,
    Password : req.body.Password,
    Age : req.body.Age
});

 const registerData = registerEmploy.save();
 res.status(201)
    }
    catch (error) {
      res.status(400).send(error)
    }
})

app.listen(port , ()=> {
    console.log("Everything is ok dont panic")
})



//         # My website is ready