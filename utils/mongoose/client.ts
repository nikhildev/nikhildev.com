import mongoose, { Model } from "mongoose";
import Post from "./models/post";

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { BLOG_DATABASE_URL } = process.env;

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(BLOG_DATABASE_URL as string)
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  return { conn, Post };
};
