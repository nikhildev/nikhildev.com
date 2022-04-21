import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

mongoose.plugin(slug);

const postSchema = new mongoose.Schema(
  {
    slug: { type: String, slug: "title", unique: true },
    title: String,
    body: String,
    author: String,
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
