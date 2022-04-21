import mongoose from "mongoose";
const slug = require("mongoose-slug-generator");

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

export interface PostDocument extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  title: string;
  body: string;
  slug: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const Post =
  mongoose.models.Post || mongoose.model<PostDocument>("Post", postSchema);

export default Post;
