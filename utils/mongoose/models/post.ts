import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  body: String,
  author: String,
  createdAt: mongoose.Schema.Types.Date,
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
