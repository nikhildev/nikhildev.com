import mongoose from "mongoose";
import { PostT } from "../../types";

const postSchema = new mongoose.Schema(
  {
    slug: String,
    title: String,
    body: String,
    author: String,
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
