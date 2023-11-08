const express=require("express")
const auth=require ("../middlewares/auth")

const router =express.Router()

const commentController=require("../controllers/comment")

router.get("/",commentController.fetchComments)
  
  router.get("/:id",commentController.getCommentById)
  
  
  router.post("/",commentController.addComment)
   

//modifier
router.patch("/:id",commentController.UpdateComment)


router.delete("/:id",auth.loggedMiddleware,auth.isAdmin,commentController.DeleteComment)



    module.exports=router
