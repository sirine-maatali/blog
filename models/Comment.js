//text datecreation ref user ref article 
const mongoose=require ("mongoose")
const{Schema} = mongoose;

const commentSchema=mongoose.Schema({
    text:{type:String,required:true},
    dateCreation:{type:Date,required:true},
    user:{ type: Schema.Types.ObjectId, ref:'User',required:true },
    blog:{type: Schema.Types.ObjectId, ref:'Blog',required:true }
})

module.exports=mongoose.model("Comment",commentSchema)