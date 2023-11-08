//nom email mdp articles comments

const mongoose=require ("mongoose")
const{Schema} = mongoose;

const userSchema=mongoose.Schema({
    nom:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    blog:[{ type: Schema.Types.ObjectId, ref:'Blog'}],
    comment:[{ type: Schema.Types.ObjectId, ref:'Comment' }],
    role:{type:String,enum:["admin","user"],default:"user"}

})

module.exports=mongoose.model("User",userSchema)