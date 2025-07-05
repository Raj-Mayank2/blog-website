import Post from "../models/Post.js";

export const getPosts=async (req ,res)=>{
    try{
        const posts=await Post.find().sort({createdAt:-1});
        res.json(posts);
    }catch(err){
        res.status(500).json({messsage:'Server Error'});
    }
}

export const getPostById=async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        if(!post)  return res.status(404).json({messsage:'Post not found'});
        res.json(post);
    }catch(err){
        res.status(500).json({message:'Server Error'});
    }
};

// server/controllers/postController.js
export const createPost = async (req, res) => {
  console.log('📥 Incoming request body:', req.body); // Add this line

  const { title, description, content } = req.body;

  try {
    const newPost = new Post({ title, description, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error('❌ Error:', err.message);
    res.status(400).json({ message: 'Invalid post data' });
  }


};
export const updatePost = async (req, res) => {
  const { title, description, content } = req.body;

  try {
    const updated = await Post.findByIdAndUpdate(
      req.params.id,
      { title, description, content },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Post not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error while updating post' });
  }
};

// Delete post
export const deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error while deleting post' });
  }
};


