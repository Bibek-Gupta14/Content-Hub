const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose"); 
const methodOverride = require("method-override")
const User = require("./models/model.js");

//connecting ejs
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

//connecting css
app.use(express.static(path.join(__dirname, "/public")));

//post requests
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))

mongoose.connect("mongodb://127.0.0.1:27017/blog")
    .then(() => {
        console.log("Connection is successful");
    });
    
app.get("/main", async (req, res) => {
    let information = await User.find({});
    res.render("index.ejs", { information });
});

//create
app.get("/main/:id", (req, res) => {
    res.render("create.ejs");
});

app.post("/main", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let { title, content } = req.body;
    let newBlog = new User({
        title: title,
        content: content
    });
    
    newBlog.save().then((res) => {
        console.log(res);
    });
    res.redirect("/main");
})

//edit
app.get("/main/:id/edit", async (req, res) => {
    let { id } = req.params;
    let info = await User.findById(id);
    res.render("edit.ejs", { info });
});

app.put("/main/:id", async (req, res) => {
    let { id } = req.params;
    let { title: newtitle, content: newcontent } = req.body;
    await User.findByIdAndUpdate(id,
        {
            title: newtitle,
            content: newcontent,
        }, { runValidators: true, new: true });
    res.redirect("/main");
});

//delete
app.delete("/main/:id", async (req, res) => {
    let { id } = req.params;
    let deletedblog = await User.findByIdAndDelete(id);
    console.log(deletedblog);
    res.redirect("/main");
});

//show
// app.get("/main/:id", async(req, res) => {
//     let { id } = req.params;
//     let info = await User.findById(id);
//     res.render("show.ejs", {info})
// })

app.listen(8080, () => {
    console.log("Server working at port 8080");
})