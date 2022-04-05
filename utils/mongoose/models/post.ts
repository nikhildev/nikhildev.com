import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    slug: String,
    title: String,
    body: String,
    author: String,
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
