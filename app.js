const express = require ("express")
const app= express()
 const blogRoutes=require("./routes/blog")
 const userRoutes=require("./routes/user")
 const commentRoutes=require("./routes/comment")
// const catRoutes=require("./routes/category")
// const AuthorRoutes=require("./routes/author")

const mongoose = require('mongoose')

mongoose
.connect("mongodb://localhost:27017/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

  app.use(express.json())

// app.use("/api/author",AuthorRoutes)  
// app.use("/api/cats",catRoutes)  
 app.use("/api/blogs",blogRoutes)
 app.use("/api/users",userRoutes)
 app.use("/api/comment",commentRoutes)
module.exports=app