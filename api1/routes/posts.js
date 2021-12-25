const express =require("express");
const { route } = require("express/lib/application");
const router =express.Router();
const Post = require("../model/postSchema")



// GET ALL THE POST FROM THE DB WITH GET METHOD
router.get("/",async(req,res)=>{
    try{
        const fetchedPost = await Post.find();
        res.json(fetchedPost);  
    }catch(err){
        res.json({message:err})
    }
})

//GET THE SPECIFIC POST BY THE ID

router.get("/:postId",async(req,res)=>{
    
    try{
        const fetchedPost =await Post.findById(req.params.postId);
        res.json(fetchedPost)
    }catch(err){
        res.json({message:err})
    }
})
//CREATE A NEW POST WITH POST METHOD
router.post("/",async(req,res)=>{

    console.log(req.body);
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    })
    try{
        savedPost =await post.save();
        res.json(savedPost)
    }catch(err) {
        res.json({message:err})
    }
});

// DELETE THE POST

router.delete("/:postId",async(req,res)=>{
    try{
        const  post =await Post.findById(req.params.postId)
    try{
        await post.delete();
        res.json({message:"deleted successfully"})
    }catch(err){
        res.json({message:err})
    }
}catch(err){
    res.json({message:"user not found"})
}
})

// UPDATE THE POST
router.patch("/:postId",async(req,res)=>{

    try{
        const updatedPost =await Post.updateOne({_id:req.params.postId},{
            $set: req.body,
        });
        res.json(updatedPost);
    }catch(err){
        res.json({message:err})
    }

})


module.exports =router;