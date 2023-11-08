const Blog=require("../models/Blog")


const fetchBlogs = (req, res) => {
  Blog.find()
    .populate("user") 
    .populate("comment")
    .then((blogs) =>
      res.status(200).json({
        model: blogs,
        message: "success",
      })
    )
    .catch((error) => {
      res.status(400).json({
        error: error.message,
        message: "problème d'extraction",
      });
    });
}


const getBlogById = (req, res) => {
    Blog.findOne({ _id: req.params.id })
   .populate("user")  // Associer l'auteur au livre
   .populate("comment")
    .then((blog) => {
      if (!blog) {
        res.status(404).json({
          message: "blog non trouvé"
        });
        return;
      }
    
      res.status(200).json({
        model: blog,
        message: "Objet trouvé"
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
        message: "Problème",
      });
    });
    }
    

    const addBlog=(req, res) => {
        const blog = new Blog(req.body);
        blog
          .save()
          .then(() =>
            res.status(201).json({
              model: blog,
              message: "Created!",
            })
          )
          .catch((error) => {
            res.status(400).json({
              error: error.message,
              message: "Données invalides",
            });
          });
      }
    
    //modifier
    const UpdateBlog=(req, res) => {
        BLog.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
          .then((blog) => {
            if (!blog) {
              res.status(404).json({
                message: "Blog not found ",
              });
              return;
            }
            res.status(200).json({
              model: blog,
              message: "Blog updated",
            });
          })
          .catch((error) =>
            res.status(400).json({
              error: error.message,
              message: "blog not correct",
            })
          );
      }
    

      const DeleteBlog=(req, res) => {
        Blog.deleteOne({ _id: req.params.id })
          .then(() => 
          res.status(200).json({ message: "Blog deleted" }))
          
          .catch((error) => {
            res.status(400).json({
              error: error.message,
              message: "Id blog not correct ",
            });
          });
      }
    
    
     module.exports={
        fetchBlogs:fetchBlogs,
        addBlog:addBlog,
        getBlogById:getBlogById,
        UpdateBlog:UpdateBlog,
        DeleteBlog:DeleteBlog
     }