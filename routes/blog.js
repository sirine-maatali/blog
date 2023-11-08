const express=require("express")

const router =express.Router()
const auth=require ("../middlewares/auth")

const blogController=require("../controllers/blog")

router.get("/",blogController.fetchBlogs)
  
  router.get("/:id",blogController.getBlogById)
  
  
  router.post("/",blogController.addBlog)
   

//modifier
router.patch("/:id",blogController.UpdateBlog)


router.delete("/:id",auth.loggedMiddleware,auth.isAdmin,blogController.DeleteBlog)



    module.exports=router
