const mongoose=require ("mongoose")
const{Schema} = mongoose;

const blogSchema=mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    dateCr:{type:Date,required:true},
    user:{ type: Schema.Types.ObjectId, ref:'User',required:true },
    comment:[{ type: Schema.Types.ObjectId, ref:'Comment' }]
})

module.exports=mongoose.model("Blog",blogSchema)