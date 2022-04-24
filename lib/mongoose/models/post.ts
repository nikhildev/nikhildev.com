import mongoose from "mongoose";
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const postSchema = new mongoose.Schema(
  {
    slug: { type: String, slug: "title", unique: true },
    title: String,
    body: String,
    author: {
      displayName: String,
      uid: String,
    },
    isPublished: Boolean,
  },
  { timestamps: true }
);

export interface PostDocument extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  title: string;
  body: string;
  author: {
    displayName: string;
    uid: string;
  };
  isPublished: boolean;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostModel =
  mongoose.models.Post || mongoose.model<PostDocument>("Post", postSchema);

export default PostModel;
