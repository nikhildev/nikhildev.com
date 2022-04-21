import mongoose, { Model } from "mongoose";
import PostModel from "lib/mongoose/models/post";
import UserModel from "lib/mongoose/models/user";

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env;

// Mongo connection
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch((err) => console.error(err));
  console.log("Mongo Connection Established");

  return { conn, PostModel, UserModel };
};
