const Comment=require("../models/Comment")


const fetchComments = (req, res) => {
  Comment.find()
    .populate("user") 
    .populate("blog")  
    .then((comments) =>
      res.status(200).json({
        model: comments,
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


const getCommentById = (req, res) => {
    Comment.findOne({ _id: req.params.id })
     .populate("blog")  // Associer l'auteur au livre
     .populate("user")  // Associer les catégories au livre
    .then((comment) => {
      if (!comment) {
        res.status(404).json({
          message: "comment non trouvé"
        });
        return;
      }
    
      res.status(200).json({
        model: comment,
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
    

    const addComment=(req, res) => {
        const comment = new Comment(req.body);
        comment.save()
          .then(() =>
            res.status(201).json({
              model: comment,
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
    const UpdateComment=(req, res) => {
        Comment.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
          .then((comment) => {
            if (!comment) {
              res.status(404).json({
                message: "Comment not found ",
              });
              return;
            }
            res.status(200).json({
              model: comment,
              message: "Comment updated",
            });
          })
          .catch((error) =>
            res.status(400).json({
              error: error.message,
              message: "Comment not correct",
            })
          );
      }
    

      const DeleteComment=(req, res) => {
        Comment.deleteOne({ _id: req.params.id })
          .then(() => 
          res.status(200).json({ message: "Comment deleted" }))
          
          .catch((error) => {
            res.status(400).json({
              error: error.message,
              message: "Id Comment not correct ",
            });
          });
      }
    
    
     module.exports={
        fetchComments:fetchComments,
        addComment:addComment,
        getCommentById:getCommentById,
        UpdateComment:UpdateComment,
        DeleteComment:DeleteComment
     }